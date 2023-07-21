import Layout from "components/Layout";
import Container from "components/Container";
import electionsImg from "assets/images/elections.webp";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <Container bgColor="bg-color-maroon">
        <img src={electionsImg} className="w-100" alt="header img" />
      </Container>
      <Container>
        <p>It is an honor and a privilege for the IITM BS Degree Student Affairs and the Election Committee to organize the House Council elections. We hope to conduct fair and equal voting access that matches the best person to each of the House Council positions.</p>
        <p>The IITM BS Degree program is structured in a dynamic manner with a plethora of activities around the curriculum. The cohort of our learners brings the best of the diversity of India and abroad. Even more, they are distributed across various age groups {"&"} subjects, adding more flavors to the mix.  Within such a vibrant community, leadership is surely an opportunity and a challenge. </p>
      </Container>
      <Container bgColor="bg-color-maroon">
        <p>The right leadership of Group Leaders, Secretaries, Deputy Secretaries and Web Administrators can ensure better activities and opportunities for all our students.</p>
        <p>In this phase of the elections, we will be voting for the Secretary, Deputy Secretary and Web Admin for each of our twelve houses.</p>
      </Container>
      <Container>
        <p>This website has been developed to provide you candidate information and a voting form that allows you to vote for the candidates of your house.</p>
        <p>Please do share your suggestions and feedback as it helps us make our processes and systems even better.</p>
        <div className="d-flex justify-content-center w-100">
          <Link to="/candidates" className="btn auth-btn px-4 text-white">Know your Candidates</Link>
        </div>
      </Container>
    </Layout>
  );
};

export default HomePage;
