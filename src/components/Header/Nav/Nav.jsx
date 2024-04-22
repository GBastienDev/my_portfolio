import './Nav.scss';
import {useState, useEffect } from 'react';

const Nav = ({isActive, closeMenu}) => {
    const [activeSection, setActiveSection]= useState('home');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const bottom = top + section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < bottom) {
                setActiveSection(section.id);
            }
        });
    };

    const handleClick = () => {
        closeMenu();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    
    return (
        <>
            <nav className={`navbar ${isActive ? 'active' : ''}`}>
                <ul className="navbar__list">
                    <li><a className={` navbar__item ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={handleClick}>Accueil</a></li>
                    <li ><a className={` navbar__item ${activeSection === 'about' ? 'active' : ''}`} href="#about" onClick={handleClick}>À propos </a></li>
                    <li ><a className={` navbar__item ${activeSection === 'formations' ? 'active' : ''}`} href="#formations" onClick={handleClick}>Formations</a></li>
                    <li ><a className={` navbar__item ${activeSection === 'skills' ? 'active' : ''}`} href="#skills" onClick={handleClick}>Compétences</a></li>
                    <li ><a className={` navbar__item ${activeSection === 'contact' ? 'active' : ''}`} href="#contact" onClick={handleClick}>Contact</a></li>
                </ul>

                <span className="active-nav"></span>
            </nav>
        </>
    )
}

export default Nav;