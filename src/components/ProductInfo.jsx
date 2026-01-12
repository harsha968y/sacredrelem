import React, { useState } from 'react';
import { Star, Minus, Plus, Truck, ShieldCheck } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-info">
            <div className="rating" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "var(--sacred-gold)" : "none"} color="var(--sacred-gold)" />
                ))}
                <span className="text-muted" style={{ fontSize: '14px' }}>({product.reviewsCount} Reviews)</span>
            </div>

            <h1 style={{ fontSize: '32px', marginBottom: '15px', color: 'var(--mystic-dark)' }}>{product.title}</h1>

            <div className="pricing" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontSize: '28px', fontWeight: '700', color: 'var(--sacred-gold)' }}>
                    ₹{product.price.toLocaleString()}
                </span>
                <span className="text-muted" style={{ textDecoration: 'line-through', fontSize: '18px' }}>
                    ₹{product.originalPrice.toLocaleString()}
                </span>
                <span style={{
                    backgroundColor: '#ffefeb',
                    color: '#ff4d4d',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '700'
                }}>
                    {product.discount}
                </span>
            </div>

            <p className="text-muted" style={{ marginBottom: '25px', lineHeight: '1.6' }}>
                {product.shortDescription}
            </p>



            <div className="purchase-actions" style={{ marginBottom: '30px' }}>
                <div className="quantity-selector" style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    backgroundColor: 'white'
                }}>
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        style={{ padding: '10px 15px', background: 'none' }}
                    >
                        <Minus size={16} />
                    </button>
                    <span style={{ width: '40px', textAlign: 'center', fontWeight: '600' }}>{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        style={{ padding: '10px 15px', background: 'none' }}
                    >
                        <Plus size={16} />
                    </button>
                </div>

                <CountdownTimer />

                <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                    <button className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>
                        Add to Cart
                    </button>
                    <button className="btn btn-cta" style={{ width: '100%', padding: '15px' }}>
                        BUY NOW
                    </button>
                </div>
            </div>

            <div className="trust-signals" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                padding: '20px 0',
                borderTop: '1px solid var(--border-color)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                    <Truck size={20} color="var(--primary-accent)" />
                    <span>In Stock | Fast Shipping</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                    <ShieldCheck size={20} color="var(--primary-accent)" />
                    <span>100% Original Product</span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
