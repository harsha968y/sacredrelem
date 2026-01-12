import React from 'react';

const RELATED = [
    { id: 1, title: 'Pyrite Hanuman Ji', price: 1250, image: 'https://sacredrelm.com/wp-content/uploads/2024/06/Pyrite-Hanuman-Ji.jpg' },
    { id: 2, title: 'Sree Astha Laxmi', price: 1890, image: 'https://sacredrelm.com/wp-content/uploads/2024/05/Sree-Astha-Laxmi.jpg' },
    { id: 3, title: 'Karungali Stick', price: 450, image: 'https://sacredrelm.com/wp-content/uploads/2024/04/Karungali-Stick.jpg' },
    { id: 4, title: 'Crystal Quartz Mala', price: 950, image: 'https://sacredrelm.com/wp-content/uploads/2024/03/Crystal-Quartz-Mala.jpg' },
];

const RelatedProducts = () => {
    return (
        <div className="related-products" style={{ marginTop: '80px' }}>
            <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '40px' }}>You May Also Like</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '25px'
            }}>
                {RELATED.map(item => (
                    <div key={item.id} className="product-card" style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '15px', textAlign: 'center' }}>
                            <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>{item.title}</h4>
                            <p style={{ color: 'var(--primary-accent)', fontWeight: '700', marginBottom: '15px' }}>₹{item.price.toLocaleString()}</p>
                            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '12px', width: '100%' }}>Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
        .product-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          transform: translateY(-5px);
        }
        .product-card img {
          transition: transform 0.5s ease;
        }
        .product-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
        </div>
    );
};

export default RelatedProducts;
