import project1 from "./images/project1.png"
import project2 from "./images/project2.png"

function Portfolio(){
    return(
        <div id="portfolio">
            <section>
                <h2>Projects</h2>
            </section>
            <section id="projects">
                <p>Cocktail-Concocter</p>
                <a target="_blank" rel="noreferrer" href="https://ericrothmuller.github.io/Cocktail-Concocter/">
                    <img width="25%" src={project1} alt='project1'/>
                </a><br/>
                <p>Simplicity-Art-Gallery</p>
                <a target="_blank" rel="noreferrer" href="https://simplicity-art-gallery.herokuapp.com/">
                    <img width="25%" src={project2} alt='project2'/>
                </a><br/>
                <a target="_blank" rel="noreferrer" href="https://ericrothmuller.github.io/Cocktail-Concocter/">
                    <img width="25%" src={project1} alt='project'/>
                </a><br/>
                <a target="_blank" rel="noreferrer" href="https://ericrothmuller.github.io/Cocktail-Concocter/">
                    <img width="25%" src={project1} alt='project'/>
                </a><br/>
                <a target="_blank" rel="noreferrer" href="https://ericrothmuller.github.io/Cocktail-Concocter/">
                    <img width="25%" src={project1} alt='project'/>
                </a><br/>
                <a target="_blank" rel="noreferrer" href="https://ericrothmuller.github.io/Cocktail-Concocter/">
                    <img width="25%" src={project1} alt='project'/>
                </a>


            </section>
        </div>
    )
}

export default Portfolio;