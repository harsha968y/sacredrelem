import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="product-gallery">
            <div className="main-image" style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '15px',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)'
            }}>
                <img
                    src={activeImage}
                    alt="Product"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div className="thumbnails" style={{
                display: 'flex',
                gap: '10px'
            }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                        onClick={() => setActiveImage(img)}
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: `2px solid ${activeImage === img ? 'var(--primary-accent)' : 'transparent'}`,
                            transition: 'border-color 0.2s'
                        }}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
