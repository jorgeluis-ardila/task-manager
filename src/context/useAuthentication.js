import React from 'react'

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut
} from "firebase/auth";

function useAuthentication(userData) {
  const auth = getAuth();

  const createAccountEmailPass = () => {
    console.log('VOY A REGISTRARME', userData);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: userData.name
      });
      let actionCodeSettings = {
        url: 'http://localhost:3000/task-manager?email=' + user.email
      };
      sendEmailVerification(user, actionCodeSettings)
      .then(() => {
        console.log('SE HA ENVIADO EL EMAIL DE VERIFICACION')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('CATCH EMAIL', errorCode, errorMessage)
      });
      signOut(auth)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('CATCH CREATE', errorCode, errorMessage)
    });
  }
  const authEmailPass = () => {
    console.log('VOY A INICIAR SESION', userData);
  }
  const authCuentaGoogle = () => {

  }
  return {
    createAccountEmailPass,
    authEmailPass,
    authCuentaGoogle
  };
}

export { useAuthentication }