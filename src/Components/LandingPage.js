import * as React from 'react';
import Banner from '../Images/banner.jpg'
function LandingPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 my-auto">
                    <div className="col-9 mt-5">
                        <h2>Learn Programming Code with us</h2>
                    </div>
                    <div className="col-9 mt-4">
                        <p>Learn the basics of programming,
                            Observe the flow of algorithms.
                            Create coding challenges.
                            Participate in  coding challenges.
                        </p>
                    </div>
                    <div className="col-12 mt-5">
                        <button className="btn btn-primary rounded-pill px-5">
                        Get Started <i class="mx-2 fas fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
                <div className="col-md-7">
                    <img src={Banner} alt="banner" width='100%' />
                </div>
            </div>

        </div>
    );
}

export default LandingPage;
