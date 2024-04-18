import './Header.scss';
import Nav from './Nav/Nav';


const Header = () => {

    return (
        <>
            <header className="header">
                <a href="#" className="header__logo">Bastien.</a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <Nav />
            </header>
        </>
    )
}

export default Header;