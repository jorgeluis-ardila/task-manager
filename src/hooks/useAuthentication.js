import { useState } from 'react';
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

export function useAuthentication(formData, closeModal) {
  const auth = getAuth();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});

  const checkLogin = () => {
    onAuthStateChanged(auth, user => {
      if (user?.emailVerified) {
        // console.log('LOGGED');
        setIsLogged(true);
        setUserData({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        });
      } else {
        // console.log('UNLOGGED');
        setIsLogged(false);
        setUserData({});
      }
    });
  };

  const createAccountEmailPass = () => {
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
            closeModal();
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

  const authEmailPass = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user.emailVerified) {
          console.log('EL EMAIL ESTA VERIFICADO');
          checkLogin();
          closeModal();
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
        checkLogin();
        closeModal();
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
        checkLogin();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('CATCH GOOGLE', errorCode, errorMessage);
      });
  };

  return {
    createAccountEmailPass,
    authEmailPass,
    authGoogle,
    logOut,
    checkLogin,
    isLogged,
    userData,
  };
}
