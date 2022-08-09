import { useState } from 'react';
import '../styles/signUp.css';
import SignUpForm from './SIgnUpForm';
import SignInForm from './SignInForm';

import Modal from 'react-modal';
import { ImTwitter } from 'react-icons/im';

const footerItems = [
  'About',
  'Help Center',
  'Term of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Accessibility',
  'Ads Info',
  'Blog',
  'Status',
  'Careers',
  'Brand Resources',
  'Advertising',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
  '2022 Twitter, Inc',
];

const SignUp = () => {
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const handleSecondModal = () => {
    setIsOpen2(true);
  };
  const closeSecondModal = () => {
    setIsOpen2(false);
  };
  const handleOpenModal = () => {
    setIsOpen1(true);
  };
  const handleCloseModal = () => {
    setIsOpen1(false);
  };
  return (
    <>
      <Modal isOpen={modalIsOpen1} className="app__modal">
        <SignUpForm handleCloseModal={handleCloseModal} />
      </Modal>
      <Modal isOpen={modalIsOpen2} className="app__modal">
        <SignInForm closeSecondModal={closeSecondModal} />
      </Modal>
      <div className="signUp">
        <div className="signUp__right">
          <img
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png "
            alt="twitter png"
          />
        </div>
        <div className="signUp__left">
          <ImTwitter className="bird__icon" />
          <div className="signUp__detail">
            <h1>Happening Now</h1>
            <h2>Join Twitter Today</h2>
          </div>
          <div className="signUp__btn">
            <button onClick={handleOpenModal}>Sign up with email</button>
            <p>
              By signing up, you agree to the <span>Terms of Service</span> and{' '}
              <span>
                Privacy <br /> Policy
              </span>
              , including <span>Cookie Use</span>.
            </p>
          </div>
          <div className="signIn__btn">
            <h3>Already have an account?</h3>
            <button onClick={handleSecondModal}>Sign in</button>
          </div>
        </div>
      </div>
      <div className="signUp__footer">
        <ul>
          {footerItems.map((footerItem) => {
            return <li>{footerItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default SignUp;
