import React from 'react';
import { ArrowUpRight, MessageCircle, QrCode } from 'lucide-react';
import './Slide10.css';

const Slide10 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide10-card p-relative">
                <header className="s10-topbar">
                    <span className="s10-meta-pill">SECTION 02 / DEMO LIVE</span>
                    <span className="s10-meta-pill">AGENT CONNECTE AU NUMERO</span>
                </header>

                <main className="s10-layout">
                    <section className="s10-headline">
                        <h2>
                            Envoyez <span>un message</span><br />
                            voyez l'agent agir.
                        </h2>
                    </section>

                    <section className="s10-demo-panel">
                        <div className="s10-demo-location">
                            <div className="s10-icon-pill">
                                <MessageCircle size={18} />
                            </div>
                            <span>WhatsApp / SMS</span>
                        </div>

                        <h3>Demo live</h3>
                        <p>
                            Scannez le QR code ou envoyez un message au numero ci-dessous:
                            en quelques secondes, l'agent transforme une simple conversation
                            en demande qualifiee, reponse claire et premiere action metier.
                        </p>

                        <div className="s10-contact-row">
                            <div className="s10-qr-box" aria-label="QR code placeholder">
                                <QrCode size={72} />
                                <span>QR CODE</span>
                            </div>
                            <div className="s10-number-box">
                                <span>Numero de test</span>
                                <strong>+212 6 XX XX XX XX</strong>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="s10-footer">
                    <button className="s10-circle-btn" aria-label="Tester maintenant">
                        <ArrowUpRight size={20} />
                    </button>
                    <button className="s10-cta">TESTER MAINTENANT</button>
                </footer>
            </div>
        </div>
    );
};

export default Slide10;
