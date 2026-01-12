import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Initialize with 24 hours or distance to end of day
    // To make it "reset every 24 hours" and look consistent, we can count down to midnight
    const calculateTimeLeft = () => {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight.getTime() - now.getTime();

        let timeLeft = {};
        if (diff > 0) {
            timeLeft = {
                h: Math.floor((diff / (1000 * 60 * 60)) % 24),
                m: Math.floor((diff / 1000 / 60) % 60),
                s: Math.floor((diff / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const format = (num) => num?.toString().padStart(2, '0') || '00';

    return (
        <div style={{
            backgroundColor: '#fff5f5',
            border: '1px solid #ffebea',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '100%',
        }}>
            <p style={{
                color: '#d63031',
                fontSize: '14px',
                fontWeight: 'bold',
                marginBottom: '10px',
                fontFamily: 'Inter, sans-serif'
            }}>
                Special offer ends in:
            </p>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                marginBottom: '10px'
            }}>
                <div style={digitBoxStyle}>{format(timeLeft.h)}</div>
                <span style={separatorStyle}>:</span>
                <div style={digitBoxStyle}>{format(timeLeft.m)}</div>
                <span style={separatorStyle}>:</span>
                <div style={digitBoxStyle}>{format(timeLeft.s)}</div>
            </div>

            <p style={{
                color: '#d63031',
                fontSize: '12px',
                margin: 0,
                fontFamily: 'Inter, sans-serif'
            }}>
                Limited time offer! Hurry before price goes up!
            </p>
        </div>
    );
};

const digitBoxStyle = {
    backgroundColor: '#d63031',
    color: 'white',
    padding: '6px 8px',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: 'bold',
    minWidth: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace'
};

const separatorStyle = {
    color: '#d63031',
    fontSize: '20px',
    fontWeight: 'bold'
};

export default CountdownTimer;
