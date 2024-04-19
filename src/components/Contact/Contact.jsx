import './Contact.scss';

const Contact = () => {

    return (
        <>
            <section className="contact" id="contact">
                <h2 className="contact__title">Me <span className="contact__highlight">contacter</span></h2>
                <p className="contact__desc">Actuellement à la recherche d'un emploi, je suis interessée par le poste de :</p>
                <p className="contact__job">Développeur web Front-end</p>
                <div className="contact__box">

                    <div className="contact__content">
                        <div className="contact__icon"><i class='bx bx-mobile-alt'></i></div>
                        <a href="tel:+33665789248" className="contact__info">+33 6 65 78 92 48</a>
                    </div>

                    <div className="contact__content">
                        <div className="contact__icon"><i class='bx bx-envelope'></i></div>
                        <a href="mailto:bastien.gambet@gmail.com" className="contact__info">bastien.gambet@gmail.com</a>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__question">Vous souhaitez me rencontrer ?</h3>
                        <p className="contact__info">Je suis disponible à <span className="contact__highlight">Toulon</span> et ses alentours.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;