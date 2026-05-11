import React from 'react';
import { Activity, Handshake, Mail, MessageCircle, PhoneCall, Presentation, Radar, Wrench } from 'lucide-react';
import './SlideChannels.css';

const acquisitionChannels = [
    {
        title: 'Cold calls',
        text: 'Appels ciblés vers PME avec volume élevé de messages ou commandes.',
        icon: <PhoneCall size={24} />
    },
    {
        title: 'Emails directs',
        text: 'Séquences courtes avec diagnostic, cas d’usage et invitation à une démo.',
        icon: <Mail size={24} />
    },
    {
        title: 'Réseau local',
        text: 'Recommandations, entrepreneurs, commerces et contacts professionnels.',
        icon: <Handshake size={24} />
    },
    {
        title: 'Social selling',
        text: 'LinkedIn, WhatsApp Business et contenu orienté problèmes terrain.',
        icon: <MessageCircle size={24} />
    }
];

const deliveryChannels = [
    {
        title: 'Démo + audit',
        text: 'Comprendre le workflow avant de vendre une automatisation.',
        icon: <Presentation size={24} />
    },
    {
        title: 'Pilote client',
        text: 'Lancer un premier agent sur un cas mesurable et répétitif.',
        icon: <Radar size={24} />
    },
    {
        title: 'Support mensuel',
        text: 'Monitoring, ajustements, nouveaux workflows et extension progressive.',
        icon: <Activity size={24} />
    }
];

const SlideChannels = () => {
    return (
        <div className="slide-container">
            <div className="slide-card channels-card p-relative">
                <header className="channels-topbar">
                    <span className="channels-pill">LES CANAUX</span>
                    <span className="channels-pill">ACQUISITION → DÉPLOIEMENT → RÉTENTION</span>
                </header>

                <main className="channels-grid" aria-label="Canaux commerciaux et de livraison aegiLabs">
                    <section className="channels-hero">
                        <article className="channels-hero-panel channels-hero-primary">
                            <span>Canal principal</span>
                            <h2>Vente B2B accompagnée.</h2>
                            <p>
                                Diagnostic terrain, démo, pilote client et intégration gérée pour convertir
                                les PME vers un abonnement mensuel.
                            </p>
                        </article>

                        <article className="channels-hero-panel channels-hero-secondary">
                            <span>Canaux secondaires</span>
                            <h3>B2C à tester.</h3>
                            <p>
                                Contenu court, landing page et demandes entrantes pour petits commerçants,
                                sans remplacer la vente directe B2B.
                            </p>
                        </article>
                    </section>

                    <section className="channels-acquisition">
                        <div className="channels-section-label">
                            <span>01</span>
                            <strong>Acquisition</strong>
                        </div>
                        <div className="channels-mini-grid">
                            {acquisitionChannels.map((channel) => (
                                <article className="channels-mini-card" key={channel.title}>
                                    <div>{channel.icon}</div>
                                    <h3>{channel.title}</h3>
                                    <p>{channel.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="channels-delivery">
                        <div className="channels-section-label">
                            <span>02</span>
                            <strong>Livraison</strong>
                        </div>
                        {deliveryChannels.map((channel) => (
                            <article className="channels-row" key={channel.title}>
                                <div>{channel.icon}</div>
                                <div>
                                    <h3>{channel.title}</h3>
                                    <p>{channel.text}</p>
                                </div>
                            </article>
                        ))}
                    </section>

                    <section className="channels-note">
                        <div className="channels-note-icon">
                            <Wrench size={26} />
                        </div>
                        <span>Logique commerciale</span>
                        <p>
                            Le canal doit prouver la valeur avant le prix: identifier une tâche coûteuse,
                            montrer l’agent en action, puis convertir vers l’abonnement mensuel.
                        </p>
                    </section>
                </main>

                <footer className="channels-footer">SECTION 04 — CANAUX COMMERCIAUX & OPÉRATIONNELS</footer>
            </div>
        </div>
    );
};

export default SlideChannels;
