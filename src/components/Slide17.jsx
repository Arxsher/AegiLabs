import React from 'react';
import { BadgePercent, Repeat, SlidersHorizontal } from 'lucide-react';
import './Slide17.css';

const revenueItems = [
    {
        number: '01',
        title: "Frais d'intégration",
        text: 'Audit, configuration, connexion aux outils existants et lancement du premier agent.',
        price: '2 500 → 10 000 DH+',
        icon: <SlidersHorizontal size={28} />
    },
    {
        number: '02',
        title: 'Abonnement mensuel',
        text: 'Revenu récurrent par agent, canal, volume de conversations ou niveau de support.',
        price: '750 → 3 000 DH+ / mois',
        icon: <Repeat size={28} />
    },
    {
        number: '03',
        title: 'Upsell métier',
        text: 'Nouveaux workflows, agents spécialisés, analytics et automatisations avancées.',
        price: 'Expansion continue',
        icon: <BadgePercent size={28} />
    }
];

const Slide17 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide17-card p-relative">
                <div className="s17-kicker">REVENUS</div>

                <header className="s17-header">
                    <h2 className="s17-title">Un modèle simple: installer, facturer, étendre.</h2>
                    <p className="s17-description">
                        Le prix doit être compris comme une alternative à un coût humain répétitif,
                        pas comme l'achat d'un logiciel à configurer.
                    </p>
                </header>

                <section className="s17-grid">
                    {revenueItems.map((item) => (
                        <article className="s17-card" key={item.number}>
                            <div className="s17-card-top">
                                <span>{item.number}</span>
                                <div className="s17-icon">{item.icon}</div>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <strong>{item.price}</strong>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Slide17;
