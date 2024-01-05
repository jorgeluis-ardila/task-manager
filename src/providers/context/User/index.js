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
import { useGlobalStore } from '../Global';
import { INITIAL_USER_DATA } from './constants';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const auth = getAuth();
  const { onChangeLoading } = useGlobalStore();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user?.emailVerified) {
        setIsLogged(true);
        setUserData({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setIsLogged(false);
        setUserData(INITIAL_USER_DATA);
      }
      setTimeout(() => {
        onChangeLoading(false);
      }, 2000);
    });
  }, [auth, onChangeLoading]);

  const sendVerificationEmail = (user = auth.currentUser) => {
    if (user) {
      let actionCodeSettings = {
        url: `http://localhost:3000/app/login`,
      };
      sendEmailVerification(user, actionCodeSettings)
        .then(() => {
          console.log('SE HA ENVIADO EL EMAIL DE VERIFICACION');
          return { success: true };
        })
        .catch(error => {
          const errorCode = error.code;
          return { success: false, errorCode };
        });
    }
  };

  const createAccountEmailPass = formData => {
    return createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(userCredential => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: formData.name,
        });
        sendEmailVerification(user);
        return { success: true, errorCode: 'auth/success-register' };
      })
      .catch(error => {
        const errorCode = error.code;
        return { success: false, errorCode };
      });
  };

  const authEmailPass = formData => {
    return signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async userCredential => {
        const user = userCredential.user;
        if (user.emailVerified) {
          onChangeLoading(true);
          setIsLogged(true);
          setUserData({ displayName: user.displayName, email: user.email, photoURL: user.photoURL });
          return { success: true };
        } else {
          return {
            success: false,
            errorCode: 'auth/email-not-verified',
          };
        }
      })
      .catch(error => {
        const errorCode = error.code;
        return { success: false, errorCode };
      });
  };

  const authGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log('GOOGLE LOGIN', user);
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
        onChangeLoading(true);
        setIsLogged(false);
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
        sendVerificationEmail,
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
