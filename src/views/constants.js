export const messageLoginRegisterKeys = {
  invalidCredentials: 'auth/invalid-login-credentials',
  notVerified: 'auth/email-not-verified',
  successRegister: 'auth/success-register',
};

export const messageLoginRegister = {
  [messageLoginRegisterKeys.invalidCredentials]: 'Verifica tu email y/o contraseña.',
  [messageLoginRegisterKeys.notVerified]: 'Tu email no esta verificado, por favor verificalo.',
  [messageLoginRegisterKeys.successRegister]: 'Te has registrado con exito, ahora debes verificar tu email.',
};
