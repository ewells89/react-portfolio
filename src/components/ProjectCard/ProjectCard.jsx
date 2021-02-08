import React from 'react';

const ProjectCard = () => {
    return (

        <div className="container">

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                
                    <div className="card" id="project">
                        <img className="card-img-top" src="assets/projects/ISSProjectscreenshot01-index.png" alt="ISS tracker app screenshot"/>
                        <div className="card-body" id="cardText">
                            <a href="https://ewells89.github.io/group-22-project1/" target="_blank"><h5>ISS Tracker</h5></a>
                        <p className="card-text">Application to track the current location of the International Space Station, local pass-over times based on user location, forecast for pass over times, live freed from the ISS, and information about the crew members aboard.</p>
                        <p><a href="https://github.com/ewells89/group-22-project1" target="_blank">GitHub Link</a></p>
                        </div>
                    </div>
                    
                    <br/>
                    <br/>    

                </div>
                <div className="col-md-1"></div>
            </div>


        </div>       


    );
};

export default ProjectCard;