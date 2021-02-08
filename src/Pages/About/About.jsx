import React from 'react';
import Elyse from "../../images/84FkJCt.jpg"


const About = () => {
    return (
        <div>
            <section className="bio" id="bio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            
                            <div className="row">
                                <div className="col-md-3 ml-auto" id="picture">
                                    <img src={Elyse} className="mx-auto" id="myPhoto" alt="picture of me"/>
                                </div>
                                <div className="col-md-9">
                                    <h2>About</h2>
                                    
                                    <p>I am a Business Analyst working in the F&I industry.  I work 
                                    for a company that provides extended warranties to many clients
                                    within the automotive industry.  I have been working in my capacity
                                    as a Business Analyst for 6 years now at my company.</p>
                    
                                    <p>Within my role, I work specifically on internal enterprise software
                                    devlopment projects.  Initially I worked on external client-facing 
                                    projects, but have been working on internal applications to replace 
                                    legacy software for the past 4 years.</p>
                    
                                    <p>Being a non-technical person working in a technical department presents
                                    its challenges, which is why I have decided to pursue a full stack
                                    bootcamp.  I am hoping that upon completion of this bootcamp I will 
                                    have a deeper knowledge of the material I work with on a daily basis.</p>
                                </div>

                            </div>
                        
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;