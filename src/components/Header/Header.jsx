import './Header.scss';
import Nav from './Nav/Nav';
import {useEffect, useState} from 'react';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`header ${isSticky ? 'sticky' : ''} `}>
                <a href="#" className="header__logo">Bastien.</a>
                <div className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`} onClick={toggleMenu} id="menu-icon"></div>
                <Nav isActive={isActive} closeMenu={closeMenu} />
            </header>
        </>
    )
}

export default Header;