import React from 'react';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#fffaf9',
            padding: '80px 0 40px',
            borderTop: '1px solid #ffefeb',
            marginTop: '100px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '60px'
                }}>
                    <div>
                        <div className="logo" style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: 'var(--primary-accent)',
                            fontFamily: 'Lora, serif',
                            marginBottom: '20px'
                        }}>
                            Sacred Relm
                        </div>
                        <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                            Connecting you with sacred spiritual tools for a balanced and harmonious life. Authentic Karungali and more.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                            <Instagram size={20} className="nav-icon" />
                            <Youtube size={20} className="nav-icon" />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Useful Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }} className="text-muted">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Shop All</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Contact Info</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '14px' }} className="text-muted">
                            <li style={{ display: 'flex', gap: '10px' }}><MapPin size={18} color="var(--primary-accent)" /> 123 Sacred Lane, Spiritual City</li>
                            <li style={{ display: 'flex', gap: '10px' }}><Mail size={18} color="var(--primary-accent)" /> support@sacredrelm.com</li>
                            <li style={{ display: 'flex', gap: '10px' }}><Phone size={18} color="var(--primary-accent)" /> +91 98765 43210</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Business Hours</h4>
                        <p className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                            Monday - Saturday: 9:00 AM - 6:00 PM<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #ffefeb',
                    paddingTop: '30px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#aaa'
                }}>
                    © 2026 Sacred Relm. All Rights Reserved.
                </div>
            </div>
            <style>{`
        footer a:hover { color: var(--primary-accent); }
      `}</style>
        </footer>
    );
};

export default Footer;
