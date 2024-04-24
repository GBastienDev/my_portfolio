import './Formations.scss';

const Formations = () => {

    return (
        <>
            <section className="formations" id="formations">
                <h2 className="formations__title">Mes <span className="formations__highlight">formations</span><span className="animate scroll" style={{'--i' : 'var(--i1)'}}></span></h2>
                <div className="formations__row">
                    <div className="formations__column">

                        <div className="formations__box">
                            <div className="formations__box-content">
                                <div className="formations__content">
                                    <div className="formations__date"><i className='bx bx-calendar'></i> 2023 - 2024</div>
                                    <h3 className="formations__diplome">Titre professionnel de niveau 5 - Développeur Web et Web Mobile Fullstack - Ecole O'Clock</h3>
                                    <ul className="formations__list">
                                        <li className="formations__list-item">Formation professionnelle, cadre d'apprentissage avec des cours non théoriques et des travaux pratiques pour chaque module</li>
                                        <li className="formations__list-item">Base du développement web puis cours avancés HTML5,CSS3,JasaScript</li>
                                        <li className="formations__list-item">Bases de données avec PostgreSQL</li>
                                        <li className="formations__list-item">JSON, AJAX, Node.js</li>
                                        <li className="formations__list-item">Framework : React.js</li>
                                        <li className="formations__list-item">Apprentissage de Git et d'outils workflow</li>
                                        <li className="formations__list-item">Programmation orientée objet et modèle MVC</li>
                                        <li className="formations__list-item">Intégration de maquettes HTML responsive</li>
                                        <li className="formations__list-item">Réalisation et conception de projet : maquettes, wireframes, mcd, mld, mpd, dico de données, cahier des charges</li>
                                        <li className="formations__list-item">Réalisation d'un projet final à présenter devant un jury</li>
                                    </ul>
                                </div>
                                <span className="animate scroll" style={{'--i' : 'var(--i2)'}}></span>
                            </div>
                        </div>

                        <div className="formations__box">
                            <div className="formations__box-content">
                                <div className="formations__content">
                                    <div className="formations__date"><i className='bx bx-calendar'></i> 2014 - 2015</div>
                                    <h3 className="formations__diplome">Titre professionnel de niveau 4 - Maintenicien en micro-informatique et réseaux - ASTON Ecole informatique</h3>
                                    <ul className="formations__list">
                                        <li className="formations__list-item">Diagnoctic et dépannage</li>
                                        <li className="formations__list-item">Maintenance préventive</li>
                                        <li className="formations__list-item">Installation et configuration des ordinateurs, préiphériques, logiciels et équipements réseau selon les besoins de l'utilisateur ou de l'entreprise</li>
                                        <li className="formations__list-item">Gestion des incidents</li>
                                        <li className="formations__list-item">Support technique</li>
                                        <li className="formations__list-item">Connaissance des concepts de base des réseaux informatiques</li>
                                        <li className="formations__list-item">Sauvegarde et récupération des données</li>
                                    </ul>
                                </div>
                                <span className="animate scroll" style={{'--i' : 'var(--i3)'}}></span>
                            </div>
                        </div>

                        <div className="formations__box">
                            <div className="formations__box-content">
                                <div className="formations__content">
                                    <div className="formations__date"><i className='bx bx-calendar'></i> 2008 - 2010</div>
                                    <h3 className="formations__diplome">Brevet d'études professionnelles - Métiers de la Comptabilité - Ministère de l'Education nationale</h3>
                                    <ul className="formations__list">
                                        <li className="formations__list-item">Connaissances de base de la comptabilité</li>
                                        <li className="formations__list-item">Utilisation des logiciels comptables</li>
                                        <li className="formations__list-item">Gestion des documents comptables</li>
                                        <li className="formations__list-item">Connaissances de base dans les calculs et l'analyse des données financières</li>
                                        <li className="formations__list-item">Connaissance des obligations fiscales des entreprises et capacité à préparer et déposer ldes déclarations fiscales prériodiques</li>
                                        <li className="formations__list-item">Gestion administrative</li>
                                    </ul>
                                </div>
                                <span className="animate scroll" style={{'--i' : 'var(--i4)'}}></span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Formations;