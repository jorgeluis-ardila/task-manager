export const messageLoginRegisterKeys = {
  invalidCredentials: 'auth/invalid-login-credentials',
  notVerified: 'auth/email-not-verified',
  successRegister: 'auth/success-register',
  emailRegistered: 'auth/email-already-in-use',
  successReset: 'auth/success-reset',
};

export const messageLoginRegister = {
  [messageLoginRegisterKeys.invalidCredentials]: 'Verifica tu correo y/o contraseña.',
  [messageLoginRegisterKeys.notVerified]: 'Tu correo no esta verificado, por favor verificalo.',
  [messageLoginRegisterKeys.successRegister]: 'Te has registrado con exito, ahora debes verificar tu correo.',
  [messageLoginRegisterKeys.emailRegistered]: 'Este correo ya esta en uso. Prueba con otro',
  [messageLoginRegisterKeys.successReset]: 'Hemos enviado un correo con instrucciones.',
};
