import React from 'react';
import { Asterisk, Monitor, Smartphone } from 'lucide-react';
import './MobileGate.css';

const MobileGate = () => {
    return (
        <main className="mobile-gate" aria-label="Presentation desktop notice">
            <section className="mobile-gate-card">
                <header className="mobile-gate-header">
                    <div className="mobile-gate-brand">
                        <Asterisk size={22} />
                        <span>aegiLabs</span>
                    </div>
                    <span className="mobile-gate-pill">Format desktop</span>
                </header>

                <div className="mobile-gate-visual" aria-hidden="true">
                    <div className="mobile-gate-phone">
                        <Smartphone size={32} />
                    </div>
                    <div className="mobile-gate-line" />
                    <div className="mobile-gate-screen">
                        <Monitor size={42} />
                    </div>
                </div>

                <div className="mobile-gate-copy">
                    <p>Expérience non mobile</p>
                    <h1>Cette présentation mérite un grand écran.</h1>
                    <span>
                        Le deck a été conçu en format 16:10 avec des compositions larges,
                        des tableaux et des détails visuels. Ouvrez-le sur ordinateur pour
                        profiter de l'expérience complète.
                    </span>
                </div>

                <footer className="mobile-gate-footer">
                    <span>Mobile bloqué</span>
                    <span>Desktop recommandé</span>
                </footer>
            </section>
        </main>
    );
};

export default MobileGate;
