import React from 'react';
import { ChartNoAxesCombined, CircleDollarSign, Gauge, UsersRound } from 'lucide-react';
import './SlidePricing.css';

const determinants = [
    {
        number: '01',
        title: 'Coût',
        text: 'API IA, cloud, intégration, monitoring et support.',
        icon: <Gauge size={24} />
    },
    {
        number: '02',
        title: 'Demande',
        text: 'PME prêtes à payer pour gagner du temps et réduire les erreurs.',
        icon: <UsersRound size={24} />
    },
    {
        number: '03',
        title: 'Concurrence',
        text: 'Chatbots, no-code, freelances et recrutement junior.',
        icon: <ChartNoAxesCombined size={24} />
    }
];

const SlidePricing = () => {
    return (
        <div className="slide-container">
            <div className="slide-card pricing-card p-relative">
                <header className="pricing-topbar">
                    <span className="pricing-pill">PRICING</span>
                    <span className="pricing-pill">DÉTERMINANTS DU PRIX</span>
                </header>

                <main className="pricing-stage" aria-label="Déterminants du prix aegiLabs">
                    <section className="pricing-question-card">
                        <div className="pricing-watermark" aria-hidden="true">PRIX</div>
                        <span>Question centrale</span>
                        <h2>Quel prix pour remplacer du travail manuel ?</h2>
                        <p>
                            Le prix d’aegiLabs n’est pas celui d’un logiciel générique. Il se justifie par
                            la valeur du processus automatisé: temps gagné, disponibilité et réduction d’erreurs.
                        </p>
                    </section>

                    <section className="pricing-logic-card">
                        <div className="pricing-logic-icon">
                            <CircleDollarSign size={30} />
                        </div>
                        <span>Logique</span>
                        <h3>Prix juste</h3>
                        <div className="pricing-equation">
                            <strong>Valeur perçue</strong>
                            <span>+</span>
                            <strong>Coût maîtrisé</strong>
                        </div>
                        <p>Le client paie une économie opérationnelle, pas une interface de plus.</p>
                    </section>

                    <section className="pricing-factor-stack">
                        {determinants.map((item) => (
                            <article className="pricing-factor" key={item.number}>
                                <div className="pricing-factor-num">{item.number}</div>
                                <div className="pricing-factor-copy">
                                    <div className="pricing-factor-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </section>
                </main>

                <footer className="pricing-footer">SECTION 04 — COMMENT FIXER LE PRIX</footer>
            </div>
        </div>
    );
};

export default SlidePricing;
