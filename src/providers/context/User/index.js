import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { INITIAL_USER_DATA } from './constants';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const auth = getAuth();
  const [isLogged /* setIsLogged */] = useState(true);
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user?.emailVerified) {
        // console.log('LOGGED');
        // setIsLogged(true);
        setUserData({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        });
      } else {
        // console.log('UNLOGGED');
        // setIsLogged(false);
        setUserData(INITIAL_USER_DATA);
      }
    });
  }, [auth]);

  const createAccountEmailPass = formData => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(userCredential => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: formData.name,
        });

        let actionCodeSettings = {
          url: `http://localhost:3000/task-manager?email=${user.email}`,
        };
        sendEmailVerification(user, actionCodeSettings)
          .then(() => {
            console.log('SE HA ENVIADO EL EMAIL DE VERIFICACION');
            logOut();
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('CATCH EMAIL', errorCode, errorMessage);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('CATCH CREATE', errorCode, errorMessage);
      });
  };

  const authEmailPass = formData => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user.emailVerified) {
          console.log('EL EMAIL ESTA VERIFICADO');
          // checkLogin();
        } else {
          console.log('DEBES VERIFICAR TU EMAIL');
          logOut();
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('CATCH LOGIN', errorCode, errorMessage);
      });
  };

  const authGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        // const user = result.user;
        // checkLogin();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.error('CATCH GOOGLE', errorCode, errorMessage, email);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // checkLogin();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('CATCH GOOGLE', errorCode, errorMessage);
      });
  };

  return (
    <UserContext.Provider
      value={{
        isLogged,
        userData,
        createAccountEmailPass,
        authEmailPass,
        authGoogle,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const userContext = useContext(UserContext);
  return userContext;
};
