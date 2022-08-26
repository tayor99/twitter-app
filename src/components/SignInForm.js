import { useState, useRef, useEffect, useContext } from 'react';
import '../styles/signInForm.css';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { BASE_URL } from '../App';

const LOGIN_URL = `${BASE_URL}/login`;
const SignInForm = ({ closeSecondModal }) => {
  const errRef = useRef();
  const { setUser } = useContext(UserContext);
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [loginDetails.username, loginDetails.password]);

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(LOGIN_URL, loginDetails);
      setUser(data.user);
      localStorage.setItem('loginDetails', JSON.stringify(data));
    } catch (e) {
      setErrorMessage('Registration Failed');

      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="sIgnInForm">
        <div className="closeModal" onClick={closeSecondModal}>
          x
        </div>
        <p
          ref={errRef}
          className={errorMessage ? 'error__message' : 'no__error'}
        >
          {errorMessage}
        </p>
        <div className="signInForm">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              name="username"
              onChange={handleChange}
              value={loginDetails.username}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={loginDetails.password}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
