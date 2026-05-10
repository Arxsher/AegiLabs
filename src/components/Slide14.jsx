import React from 'react';
import { ArrowDownLeft, LockKeyhole, PlugZap, ShieldCheck, UsersRound } from 'lucide-react';
import './Slide14.css';

const controls = [
    {
        number: '01',
        risk: 'Complexité technique',
        control: 'Intégration gérée par aegiLabs, sans configuration côté client.',
        icon: <PlugZap size={26} />
    },
    {
        number: '02',
        risk: 'Données sensibles',
        control: 'Permissions limitées, rôles clairs et accès seulement aux outils nécessaires.',
        icon: <LockKeyhole size={26} />
    },
    {
        number: '03',
        risk: 'Adoption terrain',
        control: 'L’agent travaille dans les canaux existants: WhatsApp, CRM, Sheets, email.',
        icon: <UsersRound size={26} />
    },
    {
        number: '04',
        risk: 'Gestion des erreurs',
        control: 'Validation humaine, logs et monitoring pour les actions sensibles.',
        icon: <ShieldCheck size={26} />
    }
];

const Slide14 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide14-card p-relative">
                <header className="s14-topbar">
                    <span className="s14-meta-pill">SECTION 03 / ANALYSE MICRO</span>
                    <span className="s14-meta-pill">BARRIÈRES & RISQUES</span>
                </header>

                <main className="s14-layout">
                    <section className="s14-index-list" aria-label="Barrières et contrôles cybersécurité">
                        {controls.map((item) => (
                            <article className="s14-index-row" key={item.number}>
                                <div className="s14-row-icon">{item.icon}</div>
                                <div className="s14-row-copy">
                                    <h3>{item.risk}</h3>
                                    <p>{item.control}</p>
                                </div>
                                <strong>{item.number}</strong>
                            </article>
                        ))}
                    </section>

                    <section className="s14-copy">
                        <h2>Barrières<br />& risques</h2>
                        <p>
                            Les risques ne bloquent pas le projet. Ils définissent les règles:
                            permissions, validation humaine, sécurité des données et traçabilité.
                        </p>
                        <div className="s14-arrow-mark" aria-hidden="true">
                            <ArrowDownLeft size={28} />
                        </div>
                    </section>
                </main>

                <footer className="s14-footer">SECTION 03 — BARRIÈRES, RISQUE & SÉCURITÉ</footer>
            </div>
        </div>
    );
};

export default Slide14;
