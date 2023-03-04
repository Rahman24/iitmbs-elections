import Layout from "components/Layout";
import { AppContext } from "contexts/app";
import { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router";
import Loader from "./loader/Loader";

const Authenticate = ({ children }) => {
  const { session } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session.loading) {
      setLoading(false);
    }
  }, [session]);

  if (loading) {
    return (
      <Layout>
        <Loader loading={true}></Loader>
      </Layout>
    );
  }

  if (session.accessToken) {
    return children;
  } else {
    return <Redirect to={"/login?then="+window.location.href.split("org/")[1]} />;
  }
};

export default Authenticate;
