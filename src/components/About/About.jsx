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
                <div className="about__content">
                    <h3 className="about__content-title">Développeur web frontend !</h3>
                    <p className="about__desc">Développeur web junior, je cherche un emploi après avoir validé ma formation professionnelle de développeur web fullstack. Au cours de ma formation, j'ai acquis des compétences en HTML, CSS, Javascript, ainsi que des frameworks et bibliothèques populaires tels que React.js et Node.js. J'ai également développé des compétences en bases de données PostgreSQL ce qui me permet de créer des applications web dynamiques et évolutives. Je profite aujourd'hui du temps dont je dispose pour continuer d'enrichir mes connaissances en développement web et web mobile.</p>
                </div>
            </section>
        </>
    )
}

export default About;