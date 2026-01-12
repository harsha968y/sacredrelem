import React from 'react';
import { Shield, TrendingUp, Leaf, Wind } from 'lucide-react';

const iconsMapping = {
    Shield: Shield,
    TrendingUp: TrendingUp,
    Leaf: Leaf,
    Wind: Wind
};

const ProductDetails = ({ product }) => {
    return (
        <div className="product-details" style={{ marginTop: '60px' }}>
            <div className="benefits-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '60px'
            }}>
                {product.benefits.map((benefit, index) => {
                    const Icon = iconsMapping[benefit.icon];
                    return (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '25px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            border: '1px solid var(--border-color)',
                            transition: 'transform 0.2s'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#fff5f3',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 15px',
                                color: 'var(--primary-accent)'
                            }}>
                                <Icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{benefit.title}</h3>
                            <p className="text-muted" style={{ fontSize: '14px' }}>Experience the divine energy and protection.</p>
                        </div>
                    );
                })}
            </div>

            <div className="description-sections">
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '20px', borderBottom: '2px solid var(--primary-accent)', width: 'fit-content', paddingBottom: '5px' }}>
                        Product Description
                    </h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                        The Sacred Karungali Twin Blessings Set is a meticulously crafted combination of the Sacred Karungali Mala and Bracelet.
                        Made from 100% original Black Ebony wood (Karungali), this set is designed to provide spiritual protection, enhance focus,
                        and bring a sense of calm to your daily life. Black Ebony is renowned in ancient traditions for its ability to absorb
                        negative energy and radiate positive vibrations.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '20px', borderBottom: '2px solid var(--primary-accent)', width: 'fit-content', paddingBottom: '5px' }}>
                        How to Use
                    </h2>
                    <ul style={{ lineHeight: '2', color: 'var(--text-muted)', paddingLeft: '20px', listStyleType: 'disc' }}>
                        <li>Wear the Mala during meditation or daily activities.</li>
                        <li>The Bracelet can be worn on the right wrist for maximum energy flow.</li>
                        <li>Keep the set in a clean, sacred place when not in use.</li>
                        <li>Avoid contact with water and harsh chemicals to maintain the wood's integrity.</li>
                    </ul>
                </section>
            </div>
            <style>{`
        .benefits-grid div:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
      `}</style>
        </div>
    );
};

export default ProductDetails;
