import logo from '../logo.svg';
import Navigation from './Navigation';

function Header(){
    return(
        <div className="App-header background-color">
            <img id='image'src={logo} className="App-logo" alt="logo" />
            <p>Shmuel Hoffman</p>
            <Navigation />
        </div>
    )
}

export default Header;