import React from 'react';
import RecruiterImg from '../../assets/img/recruiter-img.png';
import SeekerImg from '../../assets/img/seeker-img.png';
import { Link } from 'react-router-dom';
import './recruiter.scss'

const Recruiter = () => {
    return(
        <section className="recruiter">
            {/* <Container> */}
            <div className="row m-0 p-0">
                    <div className="col-md-6 p-0">
                        <div className="recruiter-box recruiter-left">
                            <h4>I'm here for Hiring</h4>
                            <img src={RecruiterImg} alt="recruiter-img" />
                            <Link to='/recruiter-signup' className='recruiter-btn'>SIgn up as Recruiter</Link>
                            <p className="mt-4 mb-3">Already have an account?</p>
                            <Link to='/'>Login here</Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="recruiter-box recruiter-right">
                            <h4>I'm here Seeking Job</h4>
                            <img src={SeekerImg} alt="recruiter-img" />
                            <Link to='/recruiter-seeker' className='recruiter-btn'>SIgn up as Job Seeker</Link>
                            <p className="mt-4 mb-3">Already have an account?</p>
                            <Link to='/'>Login here</Link>
                            </div>
                    </div>
                    <div className="recruiter-center-box">Hiristic</div>
                </div>
            {/* </Container> */}
        </section>
    )
}

export default Recruiter