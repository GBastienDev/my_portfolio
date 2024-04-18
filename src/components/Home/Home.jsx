import './Home.scss';

const Home = () => {

    return (
        <>
            <section className="home" id="home">
                <div className="home__content">
                    <h1 className="home__title">Bonjour, je m'appelle <span>Bastien Gambet</span></h1>
                    <div className="home__text-animate">
                        <h2 className="home__highlight">Développeur web frontend</h2>
                    </div>
                    <p className="home__desc">Je suis à la recherche d'un emploi en <span className="home__strong">CDI</span> à <span className="home__strong">Toulon</span> et ses alentours.</p>
                    <div className="home__box-btn">
                        <a className="home__button" href="#contact">Contactez moi</a>
                    </div>
                </div>
                <div className="home__box-sci">
                    <a className="home__social" href="https://www.linkedin.com/in/bastien-gambet-779103293/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                    <a className="home__social" href="https://github.com/GBastienDev" target="_blank"><i className='bx bxl-github'></i></a>
                </div>
            </section>
        </>
    )
}

export default Home;