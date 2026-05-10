import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide11.css';

const Slide11 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none slide11-card">
                <div className="s11-section-badge">
                    <span>SECTION 03</span>
                </div>

                <div className="s11-index" aria-hidden="true">03</div>

                <div className="s11-title-container">
                    <h2 className="section-name">Analyse du<br />Projet</h2>
                    <button className="s11-arrow" aria-label="Continuer">
                        <ArrowDownRight size={24} />
                    </button>
                </div>

                <div className="s11-info">
                    <p className="branding-text">aegiLabs — SECTION 03</p>
                    <p className="small-description">
                        Marché cible, secteurs prioritaires,<br />
                        barrières d'adoption et avantage<br />
                        défendable du projet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide11;
