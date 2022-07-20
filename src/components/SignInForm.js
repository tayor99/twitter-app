import '../styles/signInForm.css';

const SignInForm = ({ closeSecondModal }) => {
  return (
    <div>
      <div className="sIgnInForm">
        <div className="closeModal" onClick={closeSecondModal}>
          x
        </div>
        <div className="signInForm">
          <h1>Login</h1>
          <form>
            <label htmlFor="userName">Username:</label>
            <input type="text" id="userName" name="userName" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
