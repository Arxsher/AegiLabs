import React, { useState } from 'react';
import { AlertCircle, Banknote, LockKeyhole } from 'lucide-react';
import './Slide6.css';

const analysisPoints = [
    {
        number: '01',
        title: "Le Goulot d'Étranglement Manuel",
        icon: <AlertCircle size={28} />,
        text: 'La gestion des clients sur WhatsApp (copier-coller, confirmation Cash on Delivery) est 100% manuelle. Elle limite la croissance, crée des erreurs et épuise les équipes.'
    },
    {
        number: '02',
        title: "L'Hémorragie Financière",
        icon: <Banknote size={28} />,
        text: 'Embaucher du personnel pour effectuer des tâches répétitives et du support client 24h/24 génère des coûts salariaux insoutenables pour les PME et les agences.'
    },
    {
        number: '03',
        title: 'Le Mur Technologique & Sécuritaire',
        icon: <LockKeyhole size={28} />,
        text: "Les entreprises veulent automatiser avec l'IA, mais sont bloquées par la complexité technique et refusent de confier leurs données sensibles à des applications non sécurisées."
    }
];

const Slide6 = () => {
    const [activePoint, setActivePoint] = useState('01');

    return (
        <div className="slide-container">
            <div className="slide-card slide6-card p-relative">
                <div className="slide6-kicker">LE CONSTAT</div>

                <header className="slide6-header">
                    <h2 className="slide6-title">Les Grands Défis du Marché</h2>
                    <p className="slide6-description">
                        Avant d'automatiser, il faut comprendre les frictions qui ralentissent les équipes,
                        gonflent les coûts et bloquent l'adoption de l'IA.
                    </p>
                </header>

                <div className="analysis-grid">
                    {analysisPoints.map((point) => (
                        <article
                            className={`analysis-card ${activePoint === point.number ? 'analysis-card-active' : ''}`}
                            key={point.number}
                            onClick={() => setActivePoint(point.number)}
                        >
                            <div className="analysis-card-top">
                                <span className="analysis-number">{point.number}</span>
                                <div className="analysis-icon">{point.icon}</div>
                            </div>
                            <h3>{point.title}</h3>
                            <p>{point.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slide6;
