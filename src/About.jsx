import React from 'react';
import './About.css';
import Footer from './Footer';
import Carousel from './component/Carousel.js';
import FaqTabs from './component/FaqTabs';
import TeamDetails from './component/TeamDetails';

function About() {
    return (
        <TeamDetails />
        // <div className="about">
        //     <div className="container-fluid mt-5 about-style">
        //         <div className="row">
        //             <div className="col-md-12 col-12 mx-auto">
        //                 <h1 className="text-center main-heading">About</h1>
        //                 <p className="text-center sub-heading">Grow idea with us</p>
        //                 <div className="row">
        //                     <div className="about-side col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
        //                         {/*Left side*/}
        //                         <div className="section-title">
        //                             <h1 className="title">introduction</h1>
        //                             <h2 className="subtitle"> Who Are We? <hr /></h2>
        //                         </div>
        //                         <div className="intro-content">
        //                             <p>We are Computer Science Engineering and Information Technology Students in MAKAUT,W.B. We opened a community together. So, we basically work on the website development. We aslo work as a freelancer.</p>
        //                             <ul className="list-unstyled">
        //                                 <li><i className="fas fa-check"></i> We are connecting Web developer for MAKAUT, W.B students.</li>
        //                                 <li><i className="fas fa-check"></i>we can emphasize your skills. <br /> we can help you to realize the corporate world work culture.</li>
        //                                 <li><i className="fas fa-check"></i> we are able to make good relations between seniors and juniors. </li>
        //                                 <li><i className="fas fa-check"></i>We can help you to brush up your knowledge on development filled.</li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-6 col-12">{/*Right side*/}
        //                         <Carousel />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* Another Division */}
        //     <div className="container-fluid features-section">
        //         <div className="row justify-content-center">
        //             <div className="col-md-6 col-12">
        //                 <div className="section-title">
        //                     <h1 className="title">queries</h1>
        //                     <h2 className="subtitle">frequently asked questions</h2>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row">
        //             {/* item start*/}
        //             <FaqTabs />
        //             {/* item ends*/}
        //         </div>
        //     </div>
        //     <Footer />
        // </div>
    )
}

export default About
