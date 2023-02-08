import React from 'react';
import { useAuthentication } from "../../../context/useAuthentication";
import { Context } from "../../../context";
import { Login, Register } from './Forms'
import formBase from "../formBase.module.css"
import form from "./formSession.module.css"

function SessionForm() {

  const [userData, setUserData] = React.useState({}),
        [isLogin, setIsLogin] = React.useState(true),
        {
          createAccountEmailPass,
          authEmailPass,
          authCuentaGoogle
        } = useAuthentication(userData);

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
    <form
      className=''
      onClick={(e) => e.stopPropagation()}
      onSubmit={onSubmit}
      onKeyDownCapture={onKeyUp}
    >
      <div className={formBase['inner-container']}>
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
      </div>
    </form>
  );
}

export { SessionForm }