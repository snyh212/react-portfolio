import logo from '../logo.svg';

function Header(){
    return(
        <div className="App-header background-color">
        <img id='image'src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Header;