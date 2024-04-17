import './Nav.scss';

const Nav = () => {

    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li><a className="navbar__item active" href="#home">Accueil</a></li>
                    <li ><a className="navbar__item" href="#about">À propos </a></li>
                    <li ><a className="navbar__item" href="#formations">Formations</a></li>
                    <li ><a className="navbar__item" href="#skills">Compétences</a></li>
                    <li ><a className="navbar__item" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;