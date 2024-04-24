import './Home.scss';

const Home = () => {

    return (
        <>
            <section className="home show-animate" id="home">
                <div className="home__content">
                    <h1 className="home__title">Bonjour, je m'appelle <span>Bastien Gambet</span><span className="animate"  style={{'--i': 'var(--i2)'}}></span></h1>
                    <div className="home__text-animate">
                        <h2 className="home__highlight">Développeur Web Frontend</h2>
                        <span className="animate"  style={{'--i': 'var(--i3)'}}></span>
                    </div>
                    <p className="home__desc">Je suis à la recherche d'un emploi en <span className="home__strong">CDI</span> à <span className="home__strong">Toulon</span> et ses alentours.
                        <span className="animate" style={{'--i' : 'var(--i4)'}}></span>
                    </p>
                    <div className="home__box-btn">
                        <a className="home__button" href="#contact">Contactez moi</a>
                        <span className="animate" style={{'--i' : 'var(--i5)'}}></span>
                    </div>
                </div>
                <div className="home__box-sci">
                    <a className="home__social" href="https://www.linkedin.com/in/bastien-gambet-779103293/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                    <a className="home__social" href="https://github.com/GBastienDev" target="_blank"><i className='bx bxl-github'></i></a>
                    <span className="animate" style={{'--i' : 'var(--i6)'}}></span>
                </div>

                <div className="home__img-hover"></div>
                <span className="animate home-img" style={{'--i' : 'var(--i7)'}}></span>
            </section>
        </>
    )
}

export default Home;