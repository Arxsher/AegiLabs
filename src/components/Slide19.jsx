import React from 'react';
import { Rocket, ShieldCheck } from 'lucide-react';
import './Slide19.css';

const Slide19 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide19-card p-relative">
                <div className="s19-top-left">SECTION 05</div>
                <div className="s19-branding">aegiLabs — CONCLUSION & VISION</div>

                <main className="s19-layout">
                    <section className="s19-left">
                        <h2>
                            Automatiser <span>les entreprises</span><br />
                            sans perdre le contrôle<br />
                            des données, des équipes<br />
                            et des processus.
                        </h2>
                    </section>

                    <section className="s19-right">
                        <div className="s19-meta-row">
                            <div><Rocket size={18} /></div>
                            <span>Vision startup</span>
                        </div>
                        <h3>Une force de travail numérique locale et sécurisée.</h3>
                        <p>
                            aegiLabs veut rendre l'automatisation agentique accessible aux PME marocaines:
                            des agents déployés, gérés et surveillés par notre équipe, dans les outils déjà utilisés.
                        </p>
                        <div className="s19-trust-row">
                            <ShieldCheck size={20} />
                            <span>Souveraineté locale, sécurité, monitoring et validation humaine.</span>
                        </div>
                    </section>
                </main>

                <footer className="s19-footer">SECTION 05 — CONCLUSION & VISION</footer>
            </div>
        </div>
    );
};

export default Slide19;
