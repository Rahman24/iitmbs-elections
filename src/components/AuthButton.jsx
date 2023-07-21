import { signInFirebase } from "apis/firebase";

const AuthButton = ({ onAuthSuccess, onAuthFailure }) => {
  const handleClick = async () => {
    const response = await signInFirebase();
    const { status } = response;
    if (status === "success") {
      let data = {};
      if (response.user) {
        const { uid, email, displayName, accessToken } = response.user;
        data = { uid, email, displayName, accessToken }
      }
      return onAuthSuccess(data);
    }
    return onAuthFailure(response);
  };

  return (
    <button
      className="btn px-5 text-white auth-btn"
      onClick={handleClick}
    >
      Sign in
    </button>
  );
};

export default AuthButton;
