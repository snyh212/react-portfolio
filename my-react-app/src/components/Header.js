import logo from '../logo.svg';
import Navigation from './Navigation';

function Header(){
    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navigation />
        </header>
    )
}

export default Header;