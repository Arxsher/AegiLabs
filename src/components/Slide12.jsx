import React from 'react';
import { Building2, FileCheck2, GitBranch } from 'lucide-react';
import './Slide12.css';

const sectorsItems = [
    { title: 'E-commerce COD', text: 'Commandes & suivi' },
    { title: 'Support client', text: 'Messages récurrents' },
    { title: 'Agences', text: 'Leads & reporting' },
    { title: 'Commerce local', text: 'Demandes quotidiennes' }
];

const branchesItems = [
    { title: 'Services managés', text: 'Support & suivi' },
    { title: 'Automatisation métier', text: 'Workflows et APIs' },
    { title: 'Cloud', text: 'Outils connectés' },
    { title: 'Sécurité', text: 'Accès et traçabilité' }
];

const reglementationsItems = [
    { title: 'Données personnelles', text: 'Loi 09-08 & CNDP' },
    { title: 'Accès clients', text: 'Permissions limitées' },
    { title: 'Contrats & SLA', text: 'Responsabilités définies' }
];

const Slide12 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide12-card p-relative">
                <div className="s12-kicker">ANALYSE MACRO</div>

                <header className="s12-header">
                    <h2 className="s12-title">Dans quel environnement évolue aegiLabs ?</h2>
                    <p className="s12-description">
                        L'analyse macro situe les marchés à cibler, les branches économiques concernées
                        et le cadre réglementaire à respecter.
                    </p>
                </header>

                <section className="s12-blocks">
                    <article className="s12-block">
                        <div className="s12-block-header">
                            <span className="s12-block-number">01</span>
                            <div className="s12-block-icon">
                                <Building2 size={28} />
                            </div>
                        </div>
                        <h3 className="s12-block-title">Secteurs cibles</h3>
                        <p className="s12-block-description">
                            aegiLabs cible en priorité les entreprises qui gèrent beaucoup d'échanges clients,
                            de commandes ou de demandes répétitives.
                        </p>
                        <div className="s12-bento s12-bento-secteurs">
                            {sectorsItems.map((item, i) => (
                                <div className="s12-bento-item" key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="s12-block">
                        <div className="s12-block-header">
                            <span className="s12-block-number">02</span>
                            <div className="s12-block-icon">
                                <GitBranch size={28} />
                            </div>
                        </div>
                        <h3 className="s12-block-title">Branches</h3>
                        <p className="s12-block-description">
                            L'activité touche plusieurs branches proches: services IT managés, automatisation
                            métier, intégration cloud et sécurité opérationnelle.
                        </p>
                        <div className="s12-bento s12-bento-branches">
                            {branchesItems.map((item, i) => (
                                <div className="s12-bento-item" key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="s12-block s12-block-reglementations">
                        <div className="s12-block-header">
                            <span className="s12-block-number">03</span>
                            <div className="s12-block-icon">
                                <FileCheck2 size={28} />
                            </div>
                        </div>
                        <span className="s12-block-subtitle">Cadre légal</span>
                        <h3 className="s12-block-title">Réglementations</h3>
                        <p className="s12-block-description">
                            Le cadre légal concerne surtout la protection des données, les accès aux outils
                            clients et les engagements contractuels du service.
                        </p>
                        <div className="s12-bento s12-bento-reglementations">
                            {reglementationsItems.map((item, i) => (
                                <div className="s12-bento-item" key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>

                <footer className="s12-footer">
                    <span>Secteurs cibles → Branches → Réglementations</span>
                    <span>SECTION 03 — ANALYSE DU PROJET</span>
                </footer>
            </div>
        </div>
    );
};

export default Slide12;
