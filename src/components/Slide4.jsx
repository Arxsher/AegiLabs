import React, { useState } from 'react';
import { Bot, GitBranch, Workflow } from 'lucide-react';
import './Slide4.css';

const solutionSteps = [
    {
        number: '01',
        title: "De la Discussion à l'Action",
        text: "Contrairement aux modèles de langage classiques qui attendent une instruction, nos agents autonomes perçoivent leur environnement, raisonnent, créent des plans et utilisent des outils externes (APIs) pour agir de manière indépendante.",
        icon: <Bot size={28} />
    },
    {
        number: '02',
        title: 'Orchestration Multi-Agents',
        text: 'Pour les tâches complexes, nous utilisons un modèle "Orchestrateur-Travailleur" : un agent principal reçoit la mission, la divise en sous-tâches, et délègue l\'exécution à des agents spécialistes.',
        icon: <GitBranch size={28} />
    },
    {
        number: '03',
        title: 'Exécution "Zero-Config"',
        text: "L'employé numérique s'intègre nativement dans vos outils existants (WhatsApp, discord, telegram...n'importe qu'elle channell) et automatise des processus entiers sans aucune intervention humaine.",
        icon: <Workflow size={28} />
    }
];

const Slide4 = () => {
    const [activeStep, setActiveStep] = useState('01');

    return (
        <div className="slide-container">
            <div className="slide-card p-relative slide4-card">
                <header className="slide4-header">
                    <p className="slide4-kicker">NOTRE SOLUTION</p>
                    <h2 className="slide4-title">La Force de Travail "Limitless"</h2>
                    <p className="slide4-description">
                        Des agents autonomes capables de comprendre, orchestrer et exécuter des processus métier
                        directement depuis les canaux que vos équipes utilisent déjà.
                    </p>
                </header>

                <div className="solution-grid">
                    {solutionSteps.map((step) => (
                        <article
                            className={`solution-card ${activeStep === step.number ? 'solution-card-active' : ''}`}
                            key={step.number}
                            onClick={() => setActiveStep(step.number)}
                        >
                            <div className="solution-card-top">
                                <span>{step.number}</span>
                                <div className="solution-card-icon">{step.icon}</div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>

                <footer className="slide4-footer">
                    <span>SECTION 02 — LA SOLUTION aegiLabs</span>
                    <span>Discussion → Orchestration → Exécution</span>
                </footer>
            </div>
        </div>
    );
};

export default Slide4;
