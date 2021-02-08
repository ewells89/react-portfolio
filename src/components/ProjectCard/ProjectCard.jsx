import React from 'react';


const ProjectCard = ({title,description,ghlink,thumbnail,imgalt}) => {
    return (

        <div className="container">

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    
                    <div className="card" id="project">
                        <img className="card-img-top" src={thumbnail} alt={imgalt}/>
                        <div className="card-body" id="cardText">
                            <h5>{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><a href={ghlink} target="_blank">GitHub Link</a></p>
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