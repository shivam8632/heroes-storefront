import React from 'react'
import Container from 'react-bootstrap/Container';

import Classes from '../../../assets/img/classes-small.jpg';
import Learn from '../../../assets/img/learn-together-small.jpg';
import Event from '../../../assets/img/special-event-small.jpg';

import './intro.scss';

const Intro = () => {
  return (
    <div className='intro pt-4'>
        <Container>
            <div className='intro-header pt-4'>
                <div className='intro-heading heading heading-center'>
                    <h2><strong>What's the deal with Heroes?</strong></h2>
                </div>
            </div>
            <div className='intro-list d-flex flex-wrap justify-center align-items-center'>
                <div className='intro-item mb-4 mb-md-0 d-flex flex-column px-md-2 px-lg-5'>
                    <p className='p1-header'>Try different classes</p>
                    <p>Sign up for trial classes. Encourage your young children to learn through their own curiosity. Facilitating that helps them to develop a strong sense of self to investigate topics of interest, and become confident, independent and creative learners.</p>
                </div>
                <div className="intro-item mb-4 mb-md-0">
                    <img src={Classes} alt="member-img" />
                </div>

                <div className='intro-item mb-4 mb-md-0'>
                    <img src={Event} alt="member-img" />
                </div>
                <div className='intro-item mb-4 mb-md-0 d-flex flex-column px-md-3 px-lg-5'>
                    <p className='p1-header'>Get invited to special events</p>
                    <p>We collaborate with companies from a range of industries to give your child the chance to learn via doing and explore new things.</p>
                </div>

                <div className='intro-item mb-4 mb-md-0 d-flex flex-column px-md-3 px-lg-5'>
                    <p className='p1-header'>Have fun learning with others</p>
                    <p>Sign up for discounted trial classes. Encourage your young children to learn through their own curiosity. Facilitating that helps them to develop a strong sense of self to investigate topics of interest, and become confident, independent and creative learners.</p>
                </div>
                <div className='intro-item mb-4 mb-md-0'>
                    <img src={Learn} alt="member-img" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Intro