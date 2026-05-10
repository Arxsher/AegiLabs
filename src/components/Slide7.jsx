import React from 'react';
import './Slide7.css';

const Slide7 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card slide7-card bg-dark border-none p-relative">

                {/* Top Branding Header */}
                <header className="slide7-top-branding">
                    <span className="brand-left">L'Impasse Opérationnelle</span>
                    <span className="brand-center">L'Évolution du Goulot d'Étranglement</span>
                </header>

                {/* Main Content Area */}
                <div className="slide7-content-area">

                    {/* Left Text Column */}
                    <div className="slide7-text-col">
                        <h2 className="slide7-main-title">
                            Le<br />
                            Problème<br />
                            Aujourd'hui
                        </h2>
                        <p className="slide7-description">
                            Comprendre pourquoi les PME <br />
                            sont paralysées malgré l'accès à <br />
                            tous les outils digitaux modernes.
                        </p>
                    </div>

                    {/* Right Chart Column */}
                    <div className="slide7-chart-col">

                        {/* Bar 1: Information (Min: 50) */}
                        <div className="chart-bar bar-1">
                            <div className="bar-content">
                                <h3 className="bar-value">Aujourd'hui</h3>
                                <p className="bar-label">Le Chaos des Messageries</p>
                                <p className="bar-sub-desc">Surcharge WhatsApp, copier-coller et erreurs de saisie.</p>
                            </div>
                        </div>

                        {/* Bar 2: Industrial (Medium: 250) */}
                        <div className="chart-bar bar-2">
                            <div className="bar-content">
                                <h3 className="bar-value">Années 2010</h3>
                                <p className="bar-label">L'Échec des Chatbots</p>
                                <p className="bar-sub-desc">Outils rigides créant de la frustration chez les clients.</p>
                            </div>
                        </div>

                        {/* Bar 3: Agricultural (Highest: 10k) */}
                        <div className="chart-bar bar-3">
                            <div className="bar-content">
                                <h3 className="bar-value">Années 2000</h3>
                                <p className="bar-label">Les Logiciels Isolés</p>
                                <p className="bar-sub-desc">Logiciels nécessitant une gestion humaine constante.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright Footer */}
                <footer className="slide7-footer">
                    <span className="copyright-text">SECTION 01 — LE GOULOT D'ÉTRANGLEMENT MANUEL</span>
                </footer>

            </div>
        </div>
    );
};

export default Slide7;
