import './Contact.scss';

const Contact = () => {

    return (
        <>
            <section className="contact" id="contact">
                <h2 className="contact__title">Me <span className="contact__highlight">contacter</span><span className="animate scroll" style={{'--i' : 'var(--i1)'}}></span></h2>
                <p className="contact__desc">Actuellement à la recherche d'un emploi, je suis interessée par le poste de :
                <span className="animate scroll" style={{'--i' : 'var(--i2)'}}></span>
                </p>
                <p className="contact__job">Développeur web Front-end
                <span className="animate scroll" style={{'--i' : 'var(--i3)'}}></span>
                </p>
                <div className="contact__box">

                    <div className="contact__content">
                        <div className="contact__icon"><i class='bx bx-mobile-alt'></i></div>
                        <a href="tel:+33665789248" className="contact__info">+33 6 65 78 92 48</a>
                        <span className="animate scroll" style={{'--i' : 'var(--i4)'}}></span>
                    </div>

                    <div className="contact__content">
                        <div className="contact__icon"><i class='bx bx-envelope'></i></div>
                        <a href="mailto:bastien.gambet@gmail.com" className="contact__info">bastien.gambet@gmail.com</a>
                        <span className="animate scroll" style={{'--i' : 'var(--i5)'}}></span>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__question">Vous souhaitez me rencontrer ?</h3>
                        <p className="contact__info">Je suis disponible à <span className="contact__highlight">Toulon</span> et ses alentours.</p>
                        <span className="animate scroll" style={{'--i' : 'var(--i6)'}}></span>
                    </div>
                    <span className="animate" style={{'--i' : 'var(--i2)'}}></span>
                </div>
            </section>
        </>
    )
}

export default Contact;