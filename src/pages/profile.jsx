import { useEffect, useState, useContext } from "react";

import Loader from "components/Loader";
import Layout from "components/Layout";
import Profile from "components/Profile";

import { getProfileDetails } from "apis/firebase";

import { AppContext } from "contexts/app";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { session } = useContext(AppContext);

  useEffect(() => {
    if (session.accessToken) {
      setLoading(true);
      getProfileDetails()
        .then((response) => {
          setProfile(response);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          throw err;
        });
    }
  }, [session]);

  return (
    <Layout>
      <div className="container">
        <h1 className="text-color-maroon text-uppercase text-center my-5 heading">Your Profile</h1>
        <Loader loading={loading}>
          <Profile {...profile} />
        </Loader>
        <p className="text-center mt-5">For any queries, get in touch with <i><a className="text-black" href="mailto:student-affairs@student.onlinedegree.iitm.ac.in" target="_blank" rel="noreferrer" >student-affairs@student.onlinedegree.iitm.ac.in</a></i></p>
        {/* <p className="text-center mt-5"> <i><a className="text-black" href="mailto:student-affairs@student.onlinedegree.iitm.ac.in" target="_blank">student-affairs@student.onlinedegree.iitm.ac.in</a></i></p> */}
      </div>
    </Layout>
  );
};

export default ProfilePage;
