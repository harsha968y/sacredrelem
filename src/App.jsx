import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';
import './index.css';

const PRODUCT = {
  id: 'sacred-karungali-mala',
  title: 'Sacred Karungali Twin Blessings Set',
  price: 1799,
  originalPrice: 2988,
  discount: '40% OFF',
  rating: 4.8,
  reviewsCount: 124,
  shortDescription: 'Exclusive combo of Sacred Karungali Mala (108 Beads) and Bracelet. Pure Black Ebony wood to remove negativity and attract success.',
  images: [
    'https://sacredrelm.com/wp-content/uploads/2024/07/Sacred-Karungali-Twin-Blessings-Set-1.jpg',
    'https://sacredrelm.com/wp-content/uploads/2024/07/Sacred-Karungali-Twin-Blessings-Set-2.jpg',
    'https://sacredrelm.com/wp-content/uploads/2024/07/Sacred-Karungali-Twin-Blessings-Set-3.jpg',
  ],
  benefits: [
    { title: 'Removes Negativity', icon: 'Shield' },
    { title: 'Attracts Success', icon: 'TrendingUp' },
    { title: 'Spiritual Growth', icon: 'Leaf' },
    { title: 'Stress Relief', icon: 'Wind' },
  ]
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <ProductGallery images={PRODUCT.images} />
          <ProductInfo product={PRODUCT} />
        </div>
        <ProductDetails product={PRODUCT} />
        <RelatedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
