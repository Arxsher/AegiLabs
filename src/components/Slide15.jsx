import React from 'react';
import './Slide15.css';

const ecosystemCards = [
    {
        number: '01',
        title: 'Concurrence',
        scope: 'Chatbots simples, plateformes no-code, assistants IA génériques et recrutement junior.',
        position: 'Ces alternatives automatisent une partie du besoin, mais demandent souvent configuration, suivi ou intervention interne.'
    },
    {
        number: '02',
        title: 'Positionnement',
        scope: 'Service géré, agents opérationnels, intégration sur mesure et monitoring.',
        position: 'aegiLabs se place comme partenaire d’exécution: l’agent est installé, suivi et amélioré selon le métier du client.'
    },
    {
        number: '03',
        title: 'Fournisseurs',
        scope: 'Modèles IA, cloud/VPS, APIs, messageries, CRM et bases de données.',
        position: 'La dépendance fournisseur est maîtrisée par le choix d’outils fiables, interchangeables et adaptés au budget client.'
    }
];

const Slide15 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide15-card p-relative">
                <header className="s15-browser-bar">
                    <div className="s15-left-meta">
                        <span className="s15-mini-pill">CONCURRENCE & FOURNISSEURS</span>
                    </div>
                    <span className="s15-mini-pill">POSITIONNEMENT</span>
                </header>

                <main className="s15-main">
                    <h2>
                        Concurrence, fournisseurs: <span>où se place</span> aegiLabs ?
                    </h2>

                    <section className="s15-table-wrap" aria-label="Concurrence, différenciation et fournisseurs">
                        <div className="s15-table-head" aria-hidden="true">
                            <span>Élément</span>
                            <span>Détails</span>
                            <span>Analyse</span>
                        </div>

                        {ecosystemCards.map((card) => (
                            <article className="s15-table-row" key={card.title}>
                                <div className="s15-table-label">
                                    <span>{card.number}</span>
                                    <strong>{card.title}</strong>
                                </div>
                                <p>{card.scope}</p>
                                <p>{card.position}</p>
                            </article>
                        ))}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Slide15;
