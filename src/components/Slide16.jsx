import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide16.css';

const Slide16 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none slide16-card">
                <div className="s16-section-badge">
                    <span>SECTION 04</span>
                </div>

                <div className="s16-index" aria-hidden="true">04</div>

                <div className="s16-title-container">
                    <h2 className="section-name">Le Modèle<br />Economique</h2>
                    <button className="s16-arrow" aria-label="Continuer">
                        <ArrowDownRight size={24} />
                    </button>
                </div>

                <div className="s16-info">
                    <p className="branding-text">aegiLabs — SECTION 04</p>
                    <p className="small-description">
                        Canaux, politique de prix,<br />
                        revenus récurrents<br />
                        et extension par usage.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide16;
