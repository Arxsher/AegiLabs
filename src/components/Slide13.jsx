import React from 'react';
import { Headphones, Megaphone, MessageCircle, ShoppingBag, Store } from 'lucide-react';
import './Slide13.css';

const sectors = [
    {
        number: '01',
        title: 'E-commerce COD',
        text: 'Confirmation commande, extraction adresse, suivi livraison et relances clients.',
        icon: <ShoppingBag size={28} />
    },
    {
        number: '02',
        title: 'Support client',
        text: 'Réponses 24/7, tri des demandes, tickets automatiques et escalade humaine.',
        icon: <Headphones size={28} />
    },
    {
        number: '03',
        title: 'Agences',
        text: 'Qualification leads, reporting, coordination interne et suivi prospects.',
        icon: <Megaphone size={28} />
    },
    {
        number: '04',
        title: 'Commerce local',
        text: 'Réservations, disponibilité produits, demandes récurrentes et fidélisation.',
        icon: <Store size={28} />
    }
];

const Slide13 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide13-card p-relative">
                <header className="s13-header">
                    <span className="s13-pill">DEMANDE & SECTEURS</span>
                    <span className="s13-pill">INCITATIONS DU MARCHÉ</span>
                </header>

                <main className="s13-layout">
                    <section className="s13-copy-block">
                        <span>Demande active</span>
                        <h2>Les premiers marchés sont conversationnels.</h2>
                        <p>
                            La demande existe chez les entreprises qui reçoivent beaucoup de messages,
                            manquent de personnel et veulent automatiser sans changer leurs outils.
                        </p>
                    </section>

                    <section className="s13-market-map" aria-label="Carte des secteurs cibles aegiLabs">
                        <div className="s13-map-grid" aria-hidden="true" />
                        <div className="s13-core-card">
                            <div className="s13-singularity" aria-hidden="true" />
                            <span>Incitations</span>
                            <strong>Réduire coûts<br />+ répondre 24/7</strong>
                            <p>Scaler sans recruter · accélérer les ventes</p>
                        </div>

                        {sectors.map((sector, index) => (
                            <article className={`s13-sector s13-sector-${index + 1}`} key={sector.title}>
                                <div className="s13-sector-top">
                                    <span>{sector.number}</span>
                                    <div>{sector.icon}</div>
                                </div>
                                <h3>{sector.title}</h3>
                                <p>{sector.text}</p>
                            </article>
                        ))}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Slide13;
