import '../styles/signUpForm.css';

const SIgnUpForm = ({ handleCloseModal }) => {
  return (
    <div className="sIgnUpForm">
      <div className="closeModal" onClick={handleCloseModal}>
        x
      </div>
      <div className="signUpForm">
        <h1>Create your account</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="userName">Username:</label>
          <input type="text" id="userName" name="userName" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SIgnUpForm;
