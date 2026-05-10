import React from 'react';
import { Brain, Milestone, TrendingUp, Zap, Flag, Sparkles } from 'lucide-react';
import './Slide5.css';

const agendaItems = [
    {
        num: '01',
        title: "L'Accroche & Le Problème",
        desc: "Le goulot d'étranglement manuel sur WhatsApp et les coûts de l'inefficacité opérationnelle.",
        icon: <Flag size={28} className="bento-icon" />
    },
    {
        num: '02',
        title: 'La Solution aegiLabs',
        desc: 'De simples chatbots aux Agents IA autonomes : présentation de notre main-d\'oeuvre "Limitless" capable d\'exécuter des processus entiers.',
        icon: <Milestone size={28} className="bento-icon" />
    },
    {
        num: '03',
        title: 'Analyse du Projet (Macro & Micro)',
        desc: "Secteurs, barrières technologiques, cybersécurité et l'importance de la souveraineté numérique.",
        icon: <TrendingUp size={28} className="bento-icon" />
    },
    {
        num: '04',
        title: 'Le Modèle Économique',
        desc: "Notre stratégie B2B/B2C, les frais d'intégration et les abonnements mensuels récurrents.",
        icon: <Brain size={28} className="bento-icon" />
    },
    {
        num: '05',
        title: 'Conclusion & Vision',
        desc: "Financer et propulser l'automatisation sécurisée de l'économie marocaine.",
        icon: <Sparkles size={28} className="bento-icon" />
    }
];

const Slide5 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide5-card">
                <header className="slide5-header">
                    <h2 className="slide5-title">Sommaire</h2>
                    <p className="slide5-subtitle">Le Déploiement de la Force de Travail Numérique</p>
                </header>

                <div className="bento-grid">
                    {/* Main Large Item (Left Column) */}
                    <div className="bento-item bento-large">
                        <div className="bento-top">
                            <span className="bento-num">{agendaItems[0].num}</span>
                            {agendaItems[0].icon}
                        </div>
                        <div className="bento-bottom">
                            <h3 className="bento-title">{agendaItems[0].title}</h3>
                            <p className="bento-desc">{agendaItems[0].desc}</p>
                        </div>
                    </div>

                    {/* Grid for items 02-04 */}
                    {agendaItems.slice(1, 4).map((item, index) => (
                        <div key={index} className="bento-item">
                            <div className="bento-top">
                                <span className="bento-num">{item.num}</span>
                                {item.icon}
                            </div>
                            <div className="bento-bottom">
                                <h3 className="bento-title-small">{item.title}</h3>
                                <p className="bento-desc-small">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* Closing Section - Wide Card */}
                    <div className="bento-item bento-closing">
                        <div className="bento-top">
                            <span className="bento-num">{agendaItems[4].num}</span>
                            {agendaItems[4].icon}
                        </div>
                        <div className="bento-bottom">
                            <h3 className="bento-title-small">{agendaItems[4].title}</h3>
                            <p className="bento-desc-small">{agendaItems[4].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide5;
