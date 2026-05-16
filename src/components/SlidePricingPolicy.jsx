import React from 'react';
import { Banknote, Bot, CreditCard, ReceiptText, Repeat, SlidersHorizontal } from 'lucide-react';
import './SlidePricingPolicy.css';

const tariffStructure = [
    {
        number: '01',
        title: 'Intégration',
        text: 'Audit, configuration, tests et lancement du premier agent.',
        value: 'Couvre le lancement',
        icon: <SlidersHorizontal size={24} />
    },
    {
        number: '02',
        title: 'Abonnement',
        text: 'Monitoring, support mensuel et maintien du workflow.',
        value: 'Couvre l’exploitation',
        icon: <Repeat size={24} />
    },
    {
        number: '03',
        title: 'Extension',
        text: 'Nouveaux agents, canaux, analytics et automatisations.',
        value: 'Couvre la croissance',
        icon: <Bot size={24} />
    }
];

const charges = [
    { label: 'Fixes', value: 'cloud, outils, support' },
    { label: 'Variables', value: 'API, conversations, canaux' },
    { label: 'Projet', value: 'audit, tests, formation' }
];

const paymentModes = [
    { number: '01', title: 'Virement', detail: 'B2B standard' },
    { number: '02', title: 'Facture', detail: 'Mensuelle' },
    { number: '03', title: 'En ligne', detail: 'Paiement rapide' },
    { number: '04', title: 'Acompte', detail: 'Avant setup' }
];

const SlidePricingPolicy = () => {
    return (
        <div className="slide-container">
            <div className="slide-card policy-card p-relative">
                <header className="policy-topbar">
                    <span className="policy-pill">POLITIQUE DE TARIFICATION</span>
                    <span className="policy-pill">CHARGES · OFFRES · PAIEMENT</span>
                </header>

                <main className="policy-stage" aria-label="Politique tarifaire aegiLabs">
                    <section className="policy-ladder">
                        <span>Structure retenue</span>
                        <h2>Setup, mensuel, extension.</h2>

                        <div className="policy-ladder-items">
                            {tariffStructure.map((item) => (
                                <article className="policy-ladder-item" key={item.number}>
                                    <div className="policy-ladder-number">{item.number}</div>
                                    <div className="policy-ladder-icon">{item.icon}</div>
                                    <div className="policy-ladder-copy">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <strong>{item.value}</strong>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="policy-side-grid">
                        <article className="policy-charges-card">
                            <div className="policy-card-head">
                                <span>Charges</span>
                                <ReceiptText size={24} />
                            </div>
                            {charges.map((charge) => (
                                <div className="policy-charge-pill" key={charge.label}>
                                    <strong>{charge.label}</strong>
                                    <span>{charge.value}</span>
                                </div>
                            ))}
                        </article>

                        <article className="policy-payment-card">
                            <div className="policy-card-head">
                                <span>Paiement</span>
                                <CreditCard size={24} />
                            </div>
                            <div className="policy-payment-board">
                                {paymentModes.map((mode) => (
                                    <div className="policy-payment-tile" key={mode.number}>
                                        <span>{mode.number}</span>
                                        <strong>{mode.title}</strong>
                                        <p>{mode.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="policy-risk-card">
                            <Banknote size={28} />
                            <span>Risque à éviter</span>
                            <h3>Revenu &lt; coût</h3>
                            <p>Le prix minimum doit couvrir le coût technique et le temps de support.</p>
                        </article>
                    </section>
                </main>

                <footer className="policy-footer">SECTION 04 — CHARGES, OFFRES & MODES DE PAIEMENT</footer>
            </div>
        </div>
    );
};

export default SlidePricingPolicy;
