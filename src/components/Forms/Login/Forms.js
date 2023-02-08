function Register ({ onChange }) {
  return (
    <>
      <input
        id='name'
        name='name'
        type='text'
        maxLength={50}
        data-length='50'
        placeholder='Your Name'
        required
        onChange={onChange}
        />
      <input
        id='email'
        name='email'
        type='email'
        maxLength={50}
        data-length='50'
        placeholder='Your Email'
        required
        onChange={onChange}
      />
      <input
        id='passUserReg'
        name='password'
        type='password'
        maxLength={15}
        data-length='15'
        placeholder='Your Password'
        required
        onChange={onChange}
      />
    </>
  );
}
function Login ({ onChange }) {
  return (
    <>
      <input
        id='email'
        name='email'
        type='email'
        maxLength={50}
        data-length='50'
        placeholder='Your Email'
        required
        onChange={onChange}
      />
      <input
        id='password'
        name='password'
        type='password'
        maxLength={15}
        data-length='15'
        placeholder='Your Password'
        required
        onChange={onChange}
      />
    </>
  );
}

export { Register, Login }