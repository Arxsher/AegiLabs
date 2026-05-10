import React from 'react';
import { Route, Target, Workflow } from 'lucide-react';
import './Slide18.css';

const scaleSteps = [
    {
        number: '01',
        title: 'Acquérir',
        text: 'Commencer par les clients déjà submergés par les messages, leads et relances.',
        icon: <Target size={28} />
    },
    {
        number: '02',
        title: 'Standardiser',
        text: 'Transformer les cas répétitifs en templates par secteur et type de workflow.',
        icon: <Workflow size={28} />
    },
    {
        number: '03',
        title: 'Étendre',
        text: 'Ajouter de nouveaux agents, canaux et automatisations une fois le premier rôle validé.',
        icon: <Route size={28} />
    }
];

const Slide18 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide18-card p-relative">
                <header className="s18-topbar">
                    <span className="s18-pill">SCALABILITÉ</span>
                    <span className="s18-pill">SERVICE → PRODUIT RÉUTILISABLE</span>
                </header>

                <main className="s18-layout">
                    <section className="s18-copy">
                        <h2>Chaque client devient un nouveau template.</h2>
                        <p>
                            Le modèle scale lorsque les workflows se répètent: confirmation commande,
                            support, relance, qualification, reporting. Chaque template réduit le coût du suivant.
                        </p>
                    </section>

                    <section className="s18-steps">
                        {scaleSteps.map((step) => (
                            <article className="s18-step" key={step.number}>
                                <div className="s18-step-top">
                                    <span>{step.number}</span>
                                    <div>{step.icon}</div>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </article>
                        ))}
                    </section>
                </main>

                <footer className="s18-footer">SECTION 04 — SCALABILITÉ & EXTENSION</footer>
            </div>
        </div>
    );
};

export default Slide18;
