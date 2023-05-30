import React from 'react';
import { useAuthentication } from "../../../utils/hooks/useAuthentication";
import { onKeyUp } from '../../../utils/utils';
import { Login, Register } from './Fields'
// import formBase from "../formBase.module.css"
import form from "./login.module.css"

export function SessionForm({
  closeModal
}) {

  const [userData, setUserData] = React.useState({}),
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

  return(
    <>
      <form
        className=''
        onSubmit={onSubmit}
        onKeyDownCapture={(e) => onKeyUp(e, 'enter', submit)}
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