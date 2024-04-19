import './Footer.scss';

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="footer__content">
                    <p className="footer__desc">Bastien GAMBET 2024 | Tous droits réservés</p>
                    <a className="footer__social" href="https://www.linkedin.com/in/bastien-gambet-779103293/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                    <a className="footer__social" href="https://github.com/GBastienDev" target="_blank"><i className='bx bxl-github'></i></a>
                </div>

                <div className="footer__box-icon">
                    <a className="footer__icon" href="#"><i class='bx bx-up-arrow-alt'></i></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;