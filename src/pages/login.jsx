import { useContext } from "react";
import { Redirect } from "react-router";

import AuthButton from "components/AuthButton";
import Footer from "components/footer/Footer";

import { AppContext } from "contexts/app";

import logo from "assets/images/logo.png";

const LoginPage = () => {
  const { session, setSession } = useContext(AppContext);

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  const handleAuthSuccess = (response) => {
    setSession(response);
  };

  if(session.accessToken) {
    return <Redirect to={window.location.href.split("=")[1]} />;
  }
  
  return (
    <main className="bg-color-maroon">
      <div style={{ paddingTop: "1rem", minHeight: "75vh" }}>
      <div className="container event-pass-page">
        <div className="m-4 text-center">
        	<img src={logo} style={{ width:"20%", paddingBottom: "2rem" }} alt="treehouse banner" />
          <h1 className="text-center text-white mb-4 heading text-uppercase">
          	Welcome to IITM BS Students Portal!!
          </h1>
          <p className="text-center text-white mb-5">
            Please sign in with your IIT Madras Student Email ID to get started!
          </p>
          <AuthButton onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} />
        </div>
        <h6 className="text-center my-5 mx-5" style={{ color: "rgba(255,255,255,0.6)" }}>
          If you face any issues signing in with your student mail id, please let us know: <br />
          <a href="mailto:webops@student.onlinedegree.iitm.ac.in" className="text-white">
            Web Team
          </a>
        </h6>
      </div>
      </div>
      <Footer />
    </main>
  );
};

export default LoginPage;