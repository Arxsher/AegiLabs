import React from 'react';
import { Bot, BrainCircuit, Cable, DatabaseZap } from 'lucide-react';
import './Slide9.css';

const layers = [
    {
        name: 'Couche Interface',
        text: 'WhatsApp, Discord, Telegram et CRM deviennent des points d\'entrée naturels.'
    },
    {
        name: 'Couche Raisonnement',
        text: 'L\'agent comprend la demande, choisit les outils et construit un plan d\'action.'
    },
    {
        name: 'Entree Systeme',
        text: 'Donnees clients, regles metier, catalogue, stock et historique alimentent le contexte.'
    },
    {
        name: 'Couche Automatisation',
        text: 'Commandes, tickets, relances, factures et mises a jour sont executes automatiquement.'
    }
];

const Slide9 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide9-card p-relative">
                <header className="s9-topbar">
                    <span className="s9-meta-pill">SECTION 02 / LA SOLUTION</span>
                    <span className="s9-meta-pill">ARCHITECTURE AGENTIQUE</span>
                </header>

                <main className="s9-layout">
                    <section className="s9-copy">
                        <p className="s9-kicker">MOTEUR aegiLabs</p>
                        <h2>LA<br />SOLUTION</h2>
                        <p className="s9-body">
                            Une requete client devient un processus complet: l'agent comprend,
                            orchestre les bons outils, puis execute l'action dans vos systemes.
                        </p>
                        <p className="s9-note">
                            Core expertise: agents autonomes, orchestration multi-agents, integrations API et souverainete locale.
                        </p>
                    </section>

                    <section className="s9-exploded" aria-label="Architecture aegiLabs en couches">
                        <div className="s9-device-layer s9-layer-top">
                            <Bot size={34} />
                        </div>
                        <div className="s9-device-layer s9-layer-chip">
                            <BrainCircuit size={30} />
                        </div>
                        <div className="s9-device-layer s9-layer-board">
                            <Cable size={36} />
                        </div>
                        <div className="s9-pillars">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="s9-device-layer s9-layer-base">
                            <DatabaseZap size={32} />
                        </div>
                    </section>

                    <section className="s9-layers">
                        {layers.map((layer) => (
                            <article className="s9-layer-callout" key={layer.name}>
                                <div className="s9-rule"></div>
                                <div>
                                    <h3>{layer.name}</h3>
                                    <p>{layer.text}</p>
                                </div>
                            </article>
                        ))}
                    </section>
                </main>

                <footer className="s9-footer">
                    <span className="s9-meta-pill">Message -&gt; Raisonnement -&gt; Execution</span>
                </footer>
            </div>
        </div>
    );
};

export default Slide9;
