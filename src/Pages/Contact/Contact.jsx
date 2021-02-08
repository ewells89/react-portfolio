import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h3>Contact</h3>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                <div className="container" id="ratings">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <hr></hr>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>

                <div className="container" id="ratings">
                    <div className="row">
                        <div className="col-md-1"></div>
                        
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="far fa-envelope" id="contactIcons"></i>
                                </div>
                                <div className="col-md-10">
                                    <h6>E-Mail</h6>
                                    <p>elyse.wells89@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="fas fa-mobile-alt" id="contactIcons"></i>
                                </div>
                                <div className="col-md-10">
                                    <h6>Mobile Number</h6>
                                    <p>678.680.8160</p>
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

export default Contact;