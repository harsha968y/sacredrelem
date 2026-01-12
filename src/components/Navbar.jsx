import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            zIndex: 1000,
            padding: '15px 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div className="logo" style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--primary-accent)',
                    fontFamily: 'Lora, serif'
                }}>
                    Sacred Relm
                </div>

                <nav className="desktop-nav" style={{ display: 'flex', gap: '25px' }}>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Shop</a>
                    <a href="#" className="nav-link">Karungali</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>

                <div className="icons" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Search size={20} className="nav-icon" />
                    <User size={20} className="nav-icon" />
                    <div style={{ position: 'relative' }}>
                        <ShoppingCart size={20} className="nav-icon" />
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--primary-accent)',
                            color: 'white',
                            fontSize: '10px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>0</span>
                    </div>
                    <Menu size={24} className="mobile-menu" style={{ display: 'none' }} />
                </div>
            </div>
            <style>{`
        .nav-link {
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
        }
        .nav-link:hover {
          color: var(--primary-accent);
        }
        .nav-icon {
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-icon:hover {
          color: var(--primary-accent);
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
        </header>
    );
};

export default Navbar;
