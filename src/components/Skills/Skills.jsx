import './Skills.scss';

const Skills = () => {

    return (
        <>
            <section className="skills" id="skills">
                <h2 className="skills__title">Mes <span className="skills__highlight">compétences</span></h2>

                <div className="skills__row">

                    <div className="skills__column">
                        <h3 className="skills__designation">Front-end</h3>
                        <div className="skills__box">
                            <div className="skills__content">

                                <div className="skills__progress">
                                    <h4 className="skills__name">HTML5 <span>90%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--html"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">CSS3 <span>80%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--css"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">SASS <span>70%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--sass"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">JavaScript <span>65%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--js"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">React.js <span>80%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--react"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">Ajax <span>80%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--ajax"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">JSON <span>90%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--json"></span></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="skills__column">
                        <h3 className="skills__designation">Back-end</h3>
                        <div className="skills__box">
                            <div className="skills__content">

                                <div className="skills__progress">
                                    <h4 className="skills__name">PostgreSQL <span>70%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--sql"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">Sequelize <span>65%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--seq"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">Node.js <span>90%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--node"></span></div>
                                </div>


                                <div className="skills__progress">
                                    <h4 className="skills__name">API REST <span>80%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--api"></span></div>
                                </div>

                                <div className="skills__progress">
                                    <h4 className="skills__name">Express.js <span>80%</span></h4>
                                    <div className="skills__bar"><span className="skills__bar-color skills__bar-color--express"></span></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;