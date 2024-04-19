import './About.scss';

const About = () => {

    return (
        <>
            <section className="about" id="about">
                <h2 className="about__title">À propos de <span className="about__highlight">moi</span></h2>
                <div className="about__box-img">
                    <img className="about__img" src="/Bastien.jpg" alt="photo de Bastien"/>
                    <span className="about__circle"></span>
                </div>
                <div className="about__box">
                    <div className="about__content">
                        <h3 className="about__content-title">Développeur web frontend !</h3>
                        <p className="about__desc">Développeur web junior, je cherche un emploi après avoir validé ma formation professionnelle de développeur web fullstack. Au cours de ma formation, j'ai acquis des compétences en HTML, CSS, Javascript, ainsi que des frameworks et bibliothèques populaires tels que React.js et Node.js. J'ai également développé des compétences en bases de données PostgreSQL ce qui me permet de créer des applications web dynamiques et évolutives. Je profite aujourd'hui du temps dont je dispose pour continuer d'enrichir mes connaissances en développement web et web mobile.</p>
                    </div>

                    <div className="about__content">
                        <h3 className="about__content-title">Environnement de travail</h3>
                        <ul className="about__list">
                            <li className="about__item"><i class='bx bx-desktop'></i> Système d'exploitation : <span className="about__item-desc">Windows 11, linux</span></li>
                            <li className="about__item"><i class='bx bxs-terminal'></i> Workflow : <span className="about__item-desc">Github, Chrome, Insomnia, Slack, Discord, Google drive, NPM</span></li>
                            <li className="about__item"><i class='bx bx-code-alt'></i> IDE : <span className="about__item-desc">Visual Studio Code</span></li>
                            <li className="about__item"><i class='bx bx-user'></i> Savoir-être : <span className="about__item-desc">Autonomie, travail en équipe, organisation, rigueur</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;