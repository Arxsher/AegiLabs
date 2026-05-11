import React from 'react';
import { Bot, Cable, CircleDollarSign, LockKeyhole, MessageCircle, Target, UsersRound, Workflow } from 'lucide-react';
import './SlideProjectCanvas.css';

const canvasItems = [
    {
        label: 'Problème',
        title: 'Trop de tâches restent manuelles.',
        text: 'Messages, relances, commandes, support et reporting ralentissent les équipes.',
        icon: <MessageCircle size={24} />,
        className: 'spc-problem'
    },
    {
        label: 'Clients cibles',
        title: 'PME avec volume conversationnel.',
        text: 'E-commerce COD, support client, agences et commerces locaux.',
        icon: <UsersRound size={24} />,
        className: 'spc-clients'
    },
    {
        label: 'Solution',
        title: 'Agents qui exécutent.',
        text: 'aegiLabs installe des agents capables de comprendre, décider et agir dans les outils du client.',
        icon: <Bot size={28} />,
        className: 'spc-solution'
    },
    {
        label: 'Valeur',
        title: 'Répondre plus vite, sans recruter plus.',
        text: 'Moins d’erreurs, disponibilité 24/7 et processus plus fluides.',
        icon: <Target size={24} />,
        className: 'spc-value'
    },
    {
        label: 'Canaux',
        title: 'Là où le client travaille déjà.',
        text: 'WhatsApp, CRM, Sheets, email, APIs et back-office.',
        icon: <Cable size={24} />,
        className: 'spc-channels'
    },
    {
        label: 'Revenus',
        title: 'Installation + abonnement.',
        text: 'Frais d’intégration, forfait mensuel et extension par usage.',
        icon: <CircleDollarSign size={24} />,
        className: 'spc-revenue'
    },
    {
        label: 'Exécution',
        title: 'Standardiser pour scaler.',
        text: 'Chaque workflow livré devient un template réutilisable pour le prochain client.',
        icon: <Workflow size={24} />,
        className: 'spc-scale'
    },
    {
        label: 'Contrôle',
        title: 'Humain sur le sensible.',
        text: 'Permissions limitées, logs, monitoring et validation avant action critique.',
        icon: <LockKeyhole size={24} />,
        className: 'spc-control'
    }
];

const SlideProjectCanvas = () => {
    return (
        <div className="slide-container">
            <div className="slide-card spc-card p-relative">
                <section className="spc-grid" aria-label="Canvas du projet aegiLabs">
                    <article className="spc-tile spc-title-tile">
                        <span>Canvas du projet</span>
                        <h2>aegiLabs<br />en une carte.</h2>
                        <p>Positionnement, valeur, modèle et exécution.</p>
                    </article>

                    {canvasItems.map((item) => (
                        <article className={`spc-tile spc-item ${item.className}`} key={item.label}>
                            <div className="spc-item-top">
                                <span>{item.label}</span>
                                <div>{item.icon}</div>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default SlideProjectCanvas;
