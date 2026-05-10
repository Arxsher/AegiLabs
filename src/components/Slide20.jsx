import React from 'react';
import { ArrowDownRight, Asterisk } from 'lucide-react';
import './Slide20.css';

const Slide20 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card slide20-card border-none p-relative">
                <header className="s20-header">
                    <div className="s20-brand">
                        <Asterisk size={24} />
                        <span>aegiLabs</span>
                    </div>
                    <span className="s20-pill">CONCLUSION</span>
                </header>

                <main className="s20-content">
                    <p>Vision finale</p>
                    <h2>
                        Le futur du travail ne remplace pas l'humain. Il lui donne un <strong className="s20-red-word">aegiLabs</strong> agent à diriger.
                    </h2>
                    <span>
                        aegiLabs la rend opérationnelle aujourd'hui: des agents qui exécutent,
                        s'intègrent aux outils existants et restent sous contrôle humain.
                    </span>
                </main>

                <footer className="s20-footer">
                    <button className="s20-cta">MERCI POUR VOTRE ATTENTION</button>
                    <button className="s20-icon" aria-label="Fin">
                        <ArrowDownRight size={20} />
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Slide20;
