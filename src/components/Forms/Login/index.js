import React from 'react';
import { Context } from '../../../context';
import { useAuthentication } from "../../../context/useAuthentication";
import { Login, Register } from './Forms'
// import formBase from "../formBase.module.css"
import form from "./formSession.module.css"

export function SessionForm() {

  const{
    closeModal
  } = React.useContext(Context),
  [userData, setUserData] = React.useState({}),
  [isLogin, setIsLogin] = React.useState(true),
  {
    createAccountEmailPass,
    authEmailPass,
    authGoogle
  } = useAuthentication(userData, closeModal);

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value});
    // setShowAlert(false)
  }
  function submit() {
    if (Object.entries(userData).length !== 0) {
      isLogin
      ? authEmailPass()
      : createAccountEmailPass()
    } else {
      // setShowAlert(true)
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    submit()
  }
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submit()
    }
  };

  return(
    <>
      <form
        className=''
        onSubmit={onSubmit}
        onKeyDownCapture={onKeyUp}
      >
        <div className={form.fields}>
          {isLogin
            ? <Login
                onChange={onChange}
              />
            : <Register
                onChange={onChange}
              />
          }
          <button
            type="submit"
            className={`${form.button}}`}
          >
            {isLogin ? 'Entrar' : 'Unete'}
          </button>
        </div>
      </form>
      {isLogin &&
        <div
          className={form['more-login-ways']}
        >
          <p>o</p>
          <button 
            onClick={authGoogle}
            className={form.authGoogle}
          >
            GOOGLE LOGIN
          </button>
          {/* <GoogleIcon
            onLogin={authGoogle}
            className={form.authGoogle}
            classNameSvg={form['google-trigger']}
          /> */}
        </div>
      }
      <p
        className={form['change-action-message']}
      >
        {isLogin 
          ? 'Aun no tienes cuenta.'
          : 'Ya estas registrado.'
        }
        <span
          className={form['change-action-button']}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? 'Registrate'
            : 'Inicia Sesión'
          }
        </span>
      </p>
    </>
  );
}