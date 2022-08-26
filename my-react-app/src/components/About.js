import photo from "./images/me.jpg"

function About(){
    return(
        <div id="about">
            <h2>About Me</h2>
            <img width="15%" src={photo} alt='self'></img>
            <p>Hey there my names Shmuel Hoffman, I'm a WebDev student from Brooklyn, New York. I am currently enrolled in a UCB coding bootcamp gaining all of the skills necessary to be a master full-stack web developer!</p>
        </div>
    )
}

export default About;