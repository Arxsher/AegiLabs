import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide2.css';

const Slide2 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card p-relative">
                {/* Welcome Tag */}
                <div className="welcome-tag">
                    <span>NOTRE ÉQUIPE</span>
                </div>

                {/* Main Text Content */}
                <main className="slide-content-v2">
                    <h2 className="lorem-title">
                        (aegiLabs)<br />
                        Spécialistes en Ingénierie Système <br />
                        et en architecture d'Agents IA. <br />
                        Notre mission est de démocratiser, <br />
                        de sécuriser et d'automatiser <span className="text-faded">les entreprises- <br />
                            avec une garantie absolue sur la <br />
                            souveraineté locale</span>
                    </h2>
                </main>

                {/* Navigation Bottom Right */}
                <div className="nav-bottom-right">
                    <button className="btn-outline-v2 uppercase">DÉCOUVRIR NOTRE ADN</button>
                    <button className="btn-icon-v2">
                        <ArrowDownRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slide2;
