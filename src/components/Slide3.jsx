import React from 'react';
import './Slide3.css';

const Slide3 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none bg-dark">
                {/* Section Badge */}
                <div className="section-badge">
                    <span>SECTION 01</span>
                </div>

                {/* Large Index Number */}
                <div className="large-index">01</div>

                {/* Main Section Title */}
                <div className="section-title-container">
                    <h2 className="section-name">
                        L'Accroche <br /> & Le Problème
                    </h2>
                </div>

                {/* Bottom Right Info */}
                <div className="bottom-right-info">
                    <p className="branding-text">aegiLabs — LE DÉFI ACTUEL</p>
                    <p className="small-description">
                        Analyse du goulot d'étranglement manuel<br />
                        et des pertes de temps.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide3;
