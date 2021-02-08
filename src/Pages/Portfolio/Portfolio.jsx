import React from 'react';
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import Projects from "../../projects"

const Portfolio = () => {
    return (
        <div id="portfolio">

                <div class="container">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <h3>Porfolio</h3>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>

                <div class="container" id="ratings">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-10">
                            <hr></hr>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
            {Projects.map((projects) => (
            <ProjectCard {...projects} key={projects.id}/>
            ))}
        </div>
    );
};

export default Portfolio;