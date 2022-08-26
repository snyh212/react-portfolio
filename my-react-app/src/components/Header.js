import logo from '../logo.svg';

function Header(){
    return(
        <div className="App-header background-color">
            <img id='image'src={logo} className="App-logo" alt="logo" />
            <p>Shmuel Hoffman</p>
            <ul id="nav" className="">
                <li className=""><a className="App-link " href="#about">About Me</a></li>
                <li className=""><a className="" href="#portfolio">Portfolio</a></li>
                <li className=""><a className="" href="#contact">Contact</a></li>
                <li className=""><a className="" href="#resume">Resume</a></li>
            </ul>
        </div>
    )
}

export default Header;