import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Questions from '../Components/Profile/Questions';
import Avatar from '../Images/banner.jpg'
import jwt_decode from "jwt-decode";
import Challenge from '../App/ChallengeAPI'



function Profile() {

  const [user, setUser] = useState();
  const [email, setEmail] = useState();


  useEffect(() => {
    try {
      const accessToken = localStorage.getItem('user');
      var decodedToken = jwt_decode(accessToken);
      setUser(decodedToken.full_name);
      setEmail(decodedToken.email)

      const user_challenges = (Challenge.userChallenge());
        

    }
    catch (e) {
      console.log("not logged in ")
    }
    

  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Dashboard</a>
              <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Questions</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              {/* ---------------------Dashboard------------------------ */}
              <div className="row my-4">
                <div className="col-lg-3">
                  <div className="col-lg-12 border shadow-sm p-5">
                    <div className="row text-center">
                      <img src={Avatar} alt="" className='border-rounded' />
                      <h5 className='pt-3'>{user}</h5>
                      <h6 className='pt-3'><i className="far fa-envelope mx-2"></i>{email}</h6>
                    </div>
                  </div>
                  <div className="col-lg-12 border shadow-sm p-5 ">
                    <div className="text-center">
                      <h5 className='mb-3'>Level</h5>
                      <div className="row justify-content-around">
                        <div className="rounded-circle border col-4">
                          <strong class="" style={{ fontSize: '3rem' }}>
                            3
                          </strong>
                        </div>

                        <div className="rounded-circle border col-4">
                          <strong class="" style={{ fontSize: '3rem' }}>
                            4
                          </strong>
                        </div>
                      </div>
                      <div class="progress mt-3 ">
                        <div class="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 border shadow-sm p-5">
                  <h4>My Tasks <hr /></h4>
                  <div className="row my-2">
                    <div className="col-lg-6"><h6>Name</h6></div>
                    <div className="col-lg-3"><h6>Language</h6></div>
                  </div>
                  <div className="row align-items-center my-2">
                    <div className="col-lg-6 ">Name of challenge</div>
                    <div className="col-lg-3">Python</div>
                    <div className="col-lg-2">
                      <div className="btn btn-outline-primary">View Solution</div>
                    </div>
                  </div>
                  <div className="row align-items-center my-2">
                    <div className="col-lg-6 ">Name of challenge</div>
                    <div className="col-lg-3">Python</div>
                    <div className="col-lg-2">
                      <div className="btn btn-outline-primary">View Solution</div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <Questions />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Profile;
