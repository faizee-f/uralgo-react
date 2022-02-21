import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Challenge from '../../App/ChallengeAPI'
import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000/api/challenge/';




function Questions() {

    const [challenge, setChallenge] = useState();

    const token = (JSON.parse(localStorage.getItem('user'))).access



    console.log('hey', challenge)

    useEffect(() => {

        const test = axios.get(API_URL + 'my_challenges/').then((response) => {
            setChallenge(response.data)
            console.log(challenge)
        }).catch((err) => {
            console.log(err)
        })

    }, []);

    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-4 ">
                    <Link to='/profile/add_question'><div className="btn btn-primary " ><i class="fa fa-plus p-2" aria-hidden="true"></i> Add Question</div></Link>
                </div>
            </div>

            {challenge && challenge.map(c => {
                return (
                    <div className="row mt-3 border shadow-sm py-3">
                        <div className="row col-md-10">
                            <div className="col-12">
                                {c.tags && c.tags.map(tag => {
                                    return (
                                        <span className="badge rounded-pill bg-dark mx-2"># {tag}</span>
                                    )
                                }

                                )}

                            </div>
                            <div className="col-md-8 mt-4" dangerouslySetInnerHTML={{ __html: c.question }}>
                            </div>
                            <div className="col-md-8">

                                <div className="col-md-2">
                                    <h6>Total Views : {c.tot_views}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Total Solved : {c.tot_solved}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Likes : {c.likes}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-2 col-sm-2">
                            <div className="col-md-4">
                                <div class="form-check form-switch">
                                    <input class="form-check-input " type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <i class="fas fa-edit"></i>
                            </div>
                            <div className="col-md-4">
                                <i class="fas fa-trash"></i>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}

export default Questions;
