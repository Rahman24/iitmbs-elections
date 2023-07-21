import { getElectionCandidates } from "apis/firebase";
import Container from "components/Container";
import ScrollFade from "components/container/ScrollFade";
import Layout from "components/Layout";
import Loader from "components/Loader";
import {Modal, Row, Col} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import candidateImg from "assets/images/candidate.webp"
import mtcImg from "assets/images/mtc.webp";

const CandidatesPage = () => {
  const [loading, setLoading] = useState(true);
  const [house, setHouse] = useState("");
  const [sec, setSec] = useState([]);
  const [dySec, setDySec] = useState([]);
  const [webAd, setWebAd] = useState([]);
  const [modal, showModal] = useState(false);
  const closeModal = () => showModal(false)
  const openModal = (name, email, photo, intro, doc) => {
    showModal(true);
    setTimeout(() => {
      document.querySelector('.btn-close').classList.add('bg-light')
      document.querySelector(".candidate-name").innerText = name;
      document.querySelector(".candidate-desc").innerText = intro;
      document.querySelector(".candidate-mail").innerText = email
      document.querySelector(".candidate-doc").href = "https://"+doc.split("https://")[1];
      document.querySelector(".candidate-pic").src = photo;
    }, 1);
  }
  useEffect(() => {
    getElectionCandidates().then((r={}) => {
      setHouse(r.house);
      setSec(r.sec);
      setDySec(r.dysec);
      setWebAd(r.webad);
    }).then(() => {
      setLoading(false)
    })
  }, [])
  return (
    <Layout>
      <Loader loading={loading}>
        <Container bgColor="bg-color-maroon">
          <ScrollFade>
            <p className="text-white text-center h5 text-uppercase">know the Candidates</p>
            <p className="text-white text-center text-capitalize display-4 mt-2">{house}</p>
            <a href="https://youtu.be/DordJ8Ep1bI" target={"_blank"} rel="noreferrer"><img src={mtcImg} width="100%" alt="Youtube Video" /></a>
          </ScrollFade>
        </Container>
        <ScrollFade>
          <Container>
            <img src={candidateImg} width="100%" alt="candidate" />
            <h3 className="text-center mb-4">Secretary</h3>
            {sec.length === 0 ? (
              <h6 className="text-center">No nominations recieved for the post of Secretary</h6>
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                {sec.map((candidate) => {
                  return (
                    <div 
                      className="card m-1" 
                      key={candidate.email} 
                      style={{
                        width:"300px",
                        height:"300px",
                        cursor:"pointer", 
                        backgroundImage: `url("https://drive.google.com/uc?export=view&id=${candidate.photo.split("=")[1]}")`,
                        backgroundSize:"cover",
                        backgroundPosition: "center center"
                      }} 
                      onClick={()=>openModal(
                        candidate.name, 
                        candidate.email, 
                        `https://drive.google.com/uc?export=view&id=${candidate.photo.split("=")[1]}`, 
                        candidate.intro, 
                        candidate.doc
                      )}
                    >
                      <div className="text-white position-absolute w-100 pt-5 px-2" style={{bottom:'0', background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))`}}>
                        <h4>{candidate.name}</h4>
                        <p className="small">{candidate.email}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </Container>
        </ScrollFade>
        <ScrollFade>
          <Container bgColor="bg-color-maroon">
            <h3 className="text-center mb-4">Deputy Secretary</h3>
            {dySec.length === 0 ? (
              <h6 className="text-center">No nominations recieved for the post of Deputy Secretary</h6>
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                {dySec.map((candidate) => {
                  return (
                    <div 
                      className="card m-1" 
                      key={candidate.email} 
                      style={{
                        width:"300px",
                        height:"300px",
                        cursor:"pointer", 
                        backgroundImage: `url("https://drive.google.com/uc?export=view&id=${candidate.photo.split("=")[1]}")`,
                        backgroundSize:"cover",
                        backgroundPosition: "center center"
                      }} 
                      onClick={()=>openModal(
                        candidate.name, 
                        candidate.email, 
                        `https://drive.google.com/uc?export=view&id=${candidate.photo.split("=")[1]}`, 
                        candidate.intro, 
                        candidate.doc
                      )}
                    >
                      <div className="text-white position-absolute w-100 pt-5 px-2" style={{bottom:'0', background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))`}}>
                        <h4>{candidate.name}</h4>
                        <p className="small">{candidate.email}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </Container>
        </ScrollFade>
        <ScrollFade>
          <Container>
            <h3 className="text-center mb-4">Web Admin</h3>
            {webAd.length === 0 ? (
              <h6 className="text-center">No nominations recieved for the post of Web Admin</h6>
            ) : (
              <div className="d-flex flex-wrap justify-content-center">
                {webAd.map((candidate) => {
                  return (
                    <div 
                      className="card m-1" 
                      key={candidate.email} 
                      style={{
                        width:"300px",
                        height:"300px",
                        cursor:"pointer", 
                        backgroundImage: `url("https://drive.google.com/uc?export=view&id=${candidate.photo.split("=")[1]}")`,
                        backgroundSize:"cover",
                        backgroundPosition: "center center"
                      }} 
                      onClick={()=>openModal(
                        candidate.name, 
                        candidate.email, 
                        `https://drive.google.com/uc?export=view&id=${candidate.photo.split("=")[1]}`, 
                        candidate.intro, 
                        candidate.doc
                      )}
                    >
                      <div className="text-white position-absolute w-100 pt-5 px-2" style={{bottom:'0', background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))`}}>
                        <h4>{candidate.name}</h4>
                        <p className="small">{candidate.email}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
            <div className="d-flex mt-5 justify-content-center w-100">
              <Link to="/vote" className="btn auth-btn px-4 text-white">Cast your votes</Link>
            </div>
          </Container>
        </ScrollFade>
        <Modal show={modal} onHide={closeModal} size="lg" centered>
          <Modal.Header className="bg-color-maroon text-color-gold" closeButton>
            <Modal.Title>
              <h4 className="candidate-name"></h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0 m-0">
            <Row className="m-0 p-0">
              <Col xs={12} md={4} className="p-0">
                <img src="" className="candidate-pic h-100 w-100" alt="modal img" />
              </Col>
              <Col xs={12} md={8} className="d-flex align-items-center">
                <div className="m-2">
                  <p className="candidate-mail font-italic small"></p>
                  <p className="candidate-desc mt-1"></p>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <a href="#modal" target={"_blank"} className="candidate-doc btn btn-outlined rounded">
              Know More
            </a>
          </Modal.Footer>
        </Modal>
      </Loader>
    </Layout>
  );
};

export default CandidatesPage;
