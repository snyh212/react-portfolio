import photo from "./images/camera.jpg"

function About(){
    return(
        <div>
            <h2>About Me</h2>
            <img src={photo} alt='self'></img>
            <p>Hey there my names Shmuel Hoffman, I'm from  </p>
        </div>
    )
}

export default About;