import { useState, useRef, useEffect } from 'react';
import '../styles/signUpForm.css';
import axios from 'axios';
import { BASE_URL } from '../App';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';

const PASSWORD_CHECK =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = `${BASE_URL}/register`;
const SIgnUpForm = ({ handleCloseModal }) => {
  const userRef = useRef();
  const errRef = useRef();
  const [createUser, setCreateUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const fieldsCheck =
    !createUser.first_name ||
    !createUser.email ||
    !createUser.last_name ||
    !createUser.password ||
    !createUser.password_confirmation ||
    !createUser.username
      ? true
      : false;

  const [isPwdValid, setIsPwdValid] = useState(false);
  const [pwdFocus, setpwdFocus] = useState(false);

  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const result = PASSWORD_CHECK.test(createUser.password);
    setIsPwdValid(result);
    const match = createUser.password === createUser.password_confirmation;
    setValidMatch(match);
  }, [createUser.password, createUser.password_confirmation]);
  useEffect(() => {
    setErrorMessage('');
  }, [createUser]);

  const handleChange = (e) => {
    setCreateUser({
      ...createUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(REGISTER_URL, createUser);
    } catch (e) {
      setErrorMessage('Registration Failed');

      errRef.current.focus();
    }
    setCreateUser({
      first_name: '',
      email: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      username: '',
    });
  };

  return (
    <div className="signUpForm">
      <div className="closeModal" onClick={handleCloseModal}>
        x
      </div>
      <div className="signUpForm">
        <h1>Create your account</h1>
        <p
          ref={errRef}
          className={errorMessage ? 'error__message' : 'no__error'}
        >
          {errorMessage}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="fistName"
            ref={userRef}
            name="first_name"
            onChange={handleChange}
            value={createUser.first_name}
            required
          />
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="last_Name"
            name="last_name"
            onChange={handleChange}
            value={createUser.last_name}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={createUser.email}
          />
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            name="username"
            onChange={handleChange}
            value={createUser.username}
          />
          <label htmlFor="password">
            Password:
            <span className={isPwdValid ? 'valid' : 'hide'}>
              <AiOutlineCheckCircle />
            </span>
            <span
              className={
                isPwdValid || !createUser.password ? 'hide' : 'invalid'
              }
            >
              <FaTimesCircle />
            </span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={createUser.password}
            onFocus={() => setpwdFocus(true)}
            onBlur={() => setpwdFocus(false)}
            required
          />
          <p className={pwdFocus && !isPwdValid ? 'intructions' : 'hide'}>
            8-24 characters <br />
            Must include uppercase and lower case letters a number and a special
            character Allowed special characters !@#$%
          </p>
          <label htmlFor="confirmPassword">
            Confirm Password:{' '}
            <span
              className={
                validMatch && createUser.password_confirmation
                  ? 'valid'
                  : 'hide'
              }
            >
              <AiOutlineCheckCircle />
            </span>
            <span
              className={
                validMatch || !createUser.password_confirmation
                  ? 'hide'
                  : 'invalid'
              }
            >
              <FaTimesCircle />
            </span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="password_confirmation"
            onChange={handleChange}
            value={createUser.password_confirmation}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p className={matchFocus && !validMatch ? 'intructions' : 'hide'}>
            Passwords must match
          </p>
          <button
            disabled={fieldsCheck}
            className={fieldsCheck ? 'disabled' : ''}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SIgnUpForm;
