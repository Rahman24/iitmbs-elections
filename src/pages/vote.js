import { useState, useEffect } from "react";

import Container from "components/Container";
import Layout from "components/Layout";
import Loader from "components/Loader";

import { getElectionCandidates, updateVote } from "apis/firebase";
import { Link } from "react-router-dom";

const VotePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({sec: [], dysec: [], webad: [], mentor: []});
  const [resp, setResp] = useState({sec: "None Selected",dysec: "None Selected",webad: "None Selected",house: "",email: ""})

  const currDate = new Date();
  const startDate = new Date(2022, 8, 2, 0, 0, 0);
  const endDate = new Date(2022, 8, 4, 0, 0, 0);

  const [time, setTime] = useState(0)

  // setInterval(() => {
  //   const endTime = endDate.getTime();
  //   const currTime = new Date().getTime();
  //   setTime(endTime-currTime);
  // }, 1000)

  const handleSubmit = () => {
    resp.house = data.house;
    resp.email = data.email;
    if (window.confirm(`Confirm the Candidates:\nSecretary: ${resp.sec.split("-")[1] || "No Nominations"} - ${resp.sec.split("@")[0]}\nDeputy Secretary: ${resp.dysec.split("-")[1] || "No Nominations"} - ${resp.dysec.split("@")[0]}\nWeb Admin: ${resp.webad.split("-")[1] || "No Nominations"} - ${resp.webad.split("@")[0]}`)) {
      document.getElementById('vote-form').innerHTML='<div class="loading"><div class="effect-1 effects"></div><div class="effect-2 effects"></div><div class="effect-3 effects"></div></div>'
      updateVote(resp).then((r) => {
        document.getElementById('vote-form').innerHTML = `
          <div class="row justify-content-center w-100 align-items-center" style="height:'70vh'">
            <h5 class='text-center mb-3'>Thanks for casting your vote</h5>
            <div>
              <h5>Secretary: </h5>
              <p>${resp.sec || "No nominations"}</p>
              <h5>Deputy Secretary</h5>
              <p>${resp.dysec || "No nominations"}</p>
              <h5>Web Admin</h5>
              <p>${resp.webad || "No nominations"}</p>
            </div>
            <a class="btn auth-btn mt-3 col-6 text-white" href="/">Go to Home</a>
          </div>
        `
      })
    }
  }

  useEffect(() => {
    getElectionCandidates().then((r={}) => {
      setData(r);
      setLoading(false);
      if (!r.voted && startDate<currDate && endDate>currDate) {
        document.getElementById('vote-form').addEventListener('submit', e => e.preventDefault())
      }
    }).catch((e) => console.log('[+] ',e))
  }, [])

  return (
    <Layout>
      <Container bgColor="bg-color-maroon">
        <p className="display-5 text-center text-white">Vote for your House Representatives</p>
        <h6 className="text-center">Voting Closes in {String(parseInt(time/(1000*60*60))).length===1 ? "0"+String(parseInt(time/(1000*60*60))) : String(parseInt(time/(1000*60*60)))}:{String(parseInt((time%(1000*60*60))/(1000*60))).length===1 ? "0"+String(parseInt((time%(1000*60*60))/(1000*60))) : String(parseInt((time%(1000*60*60))/(1000*60)))}:{String(parseInt((time%(1000*60))/(1000))).length===1 ? "0"+String(parseInt((time%(1000*60))/(1000))) : String(parseInt((time%(1000*60))/(1000)))}</h6>
      </Container>
      {startDate<currDate && endDate>currDate ? (
        <Loader loading={loading}>
          {data.voted ? (
            <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"70vh"}}>
              <h5 className="text-center">You've already voted! If you think this is a mistake, <a className="text-black" rel="noreferrer" href="mailto:student-affairs@onlinedegree.iitm.ac.in,webops@student.onlinedegree.iitm.ac.in" target={"_blank"}>let us know</a></h5>
            </div>
          ) : (
            <Container>
              <div className="display-6 text-center">Instructions</div>
              <ul className="my-3">
                <li>Make sure that your student mail ID and your house name are accurate. If not, <a className="text-black" rel="noreferrer" target={"_blank"} href="mailto:student-affairs@onlinedegree.iitm.ac.in,webops@student.onlinedegree.iitm.ac.in">let us know</a></li>
                <li>If you haven't read the pitches of the candidates, go to <Link to="/candidates" className="text-black">Candidates Page</Link></li>
                <li>Take time to read all the pitches and vote for the one who you think would be the better fit for the role.</li>
                <li>To vote for someone, click on their card. The selected candidate will be displayed at the top.</li>
                <li>You can vote only once. So make sure you don't make any mistakes.</li>
                <li>Once you submit this form, you'll get a confirm window to confirm the candidates you've voted for.</li>
              </ul>
              <form id="vote-form" onSubmit={handleSubmit}>
                {/* <div className="row align-items-center">
                  <label for="name" className="form-label h5 my-3 col-12 col-md-4">Voter Name:</label>
                  <div className="col-12 col-md-8">
                    <input type="text" id="name" class="form-control" placeholder="Enter your name" onChange={(e)=>resp.name = e.target.value} required />
                  </div>
                </div> */}
                <div className="mt-4 row align-items-center">
                  <label className="form-label h5 my-3 col-12 col-md-4">Voter's Student ID:</label>
                  <p className="col-12 col-md-8 m-0 text-truncate">{data.email}</p>
                </div>
                <div className="mt-4 row align-items-center">
                  <label className="form-label h5 my-3 col-12 col-md-4">House Name:</label>
                  <p className="col-12 col-md-8 m-0">{data.house}</p>
                </div>
                <div className="mt-4">
                  <div className="row align-items-center mb-3">
                    <label className="form-label h5 my-3 col-12 col-md-4">Select your Secretary:</label>
                    <p className="col-12 col-md-8 m-0 text-truncate m-0">{resp.sec}</p>
                  </div>
                  {/* <label for="sec" className="form-label h5 col-12 col-md-4 my-3">Select your Secretary:</label> */}
                  {data.sec.length === 0 ? (
                    <h6>No nominations recieved for the post of Web Admin</h6>
                  ) : (
                    <div className="d-flex flex-wrap justify-content-center">
                      {data.sec.map((candidate) => {
                        return (
                          <div className="card m-1" style={{width:"300px",height:"300px"}} key={candidate.email}>
                            <input type="radio" className="btn-check" name="sec" id={candidate.email+"sec"} required  />
                            <label className="btn card p-0 h-100 w-100" style={{backgroundImage:`url(${"https://drive.google.com/uc?export=view&id="+candidate.photo.split("=")[1]})`,backgroundSize:"cover",backgroundPosition:"center center"}} htmlFor={candidate.email+"sec"} onClick={()=>setResp({...resp, sec: `${candidate.email} - ${candidate.name}`})}>
                              <div className="card-body pb-0 text-start position-absolute w-100 pt-5" style={{bottom:"0",background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))`}}>
                                <h5 className="card-title">{candidate.name}</h5>
                                <p className="small">{candidate.email}</p>
                              </div>
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <div className="row align-items-center mb-3">
                    <label className="form-label h5 my-3 col-12 col-md-4">Select your Deputy Secretary:</label>
                    <p className="col-12 col-md-8 m-0 text-truncate m-0">{resp.dysec}</p>
                  </div>
                  {data.dysec.length === 0 ? (
                    <h6 className="mt-3">No nominations recieved for the post of Web Admin</h6>
                  ) : (
                    <div className="d-flex flex-wrap justify-content-center">
                      {data.dysec.map((candidate) => {
                        return (
                          <div className="card m-1" style={{width:"300px",height:"300px"}} key={candidate.email}>
                            <input type="radio" className="btn-check" name="dysec" id={candidate.email+"dysec"} required  />
                            <label className="btn card p-0 h-100 w-100" style={{backgroundImage:`url(${"https://drive.google.com/uc?export=view&id="+candidate.photo.split("=")[1]})`,backgroundSize:"cover",backgroundPosition:"center center"}} htmlFor={candidate.email+"dysec"} onClick={()=>setResp({...resp, dysec: `${candidate.email} - ${candidate.name}`})}>
                              <div className="card-body text-start position-absolute w-100 pt-4" style={{bottom:"0",background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))`}}>
                                <h5 className="card-title">{candidate.name}</h5>
                                <p className="small">{candidate.email}</p>
                              </div>
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <div className="row align-items-center mb-3">
                    <label className="form-label h5 my-3 col-12 col-md-4">Select your web Admin:</label>
                    <p className="col-12 col-md-8 m-0 text-truncate m-0">{resp.webad}</p>
                  </div>
                  {data.webad.length === 0 ? (
                    <h6 className="mt-3">No nominations recieved for the post of Web Admin</h6>
                  ) : (
                    <div className="d-flex flex-wrap justify-content-center">
                      {data.webad.map((candidate) => {
                        return (
                          <div className="card m-1" style={{width:"300px",height:"300px"}} key={candidate.email}>
                            <input type="radio" className="btn-check" name="webad" id={candidate.email+"webad"} required  />
                            <label className="btn card p-0 h-100 w-100" style={{backgroundImage:`url(${"https://drive.google.com/uc?export=view&id="+candidate.photo.split("=")[1]})`,backgroundSize:"cover",backgroundPosition:"center center"}} htmlFor={candidate.email+"webad"} onClick={()=>setResp({...resp, webad: `${candidate.email} - ${candidate.name}`})}>
                              <div className="card-body text-start position-absolute w-100 pt-4" style={{bottom:"0",background:`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))`}}>
                                <h5 className="card-title">{candidate.name}</h5>
                                <p className="small">{candidate.email}</p>
                              </div>
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div className="d-flex w-100 justify-content-center mt-5">
                  <input type="submit" value="Vote" className="px-5 auth-btn btn text-white" />
                </div>
              </form>
            </Container>
          )}
        </Loader>
      ) : (
        <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"70vh"}}>
          <h5 className="text-center">Voting window is not accessible right now. If you think this is a mistake, <a className="text-black" href="mailto:student-affairs@onlinedegree.iitm.ac.in,webops@student.onlinedegree.iitm.ac.in">let us know</a></h5>
        </div>
      )}
      <div className="d-flex justify-content-center w-100">
        <a className="text-white" href="mailto:student-affairs@onlinedegree.iitm.ac.in,webops@student.onlinedegree.iitm.ac.in?subject=Not%20able%20to%20vote&body=Hi%0AI'm not able to vote for the UHC elections. <please brief what happened>">In case of issues, let us know</a>
      </div>
    </Layout>
  )
}

export default VotePage;