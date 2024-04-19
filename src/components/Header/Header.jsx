import './Header.scss';
import Nav from './Nav/Nav';
import {useEffect, useState} from 'react';


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
    }

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
                <div className="bx bx-menu" id="menu-icon"></div>
                <Nav />
            </header>
        </>
    )
}

export default Header;