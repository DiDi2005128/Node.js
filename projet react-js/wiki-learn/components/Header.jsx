import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon">💠</span> WikiLearn
      </div>
      
      <nav className="header__nav">
        <span className="header__nav-item">Mon Apprentissage</span>
        <span className="header__nav-item" style={{color: '#0A192F', fontWeight: '700'}}>Explorer</span>
        <span className="header__nav-item">À propos</span>
      </nav>
      
      <div className="header__actions">
        <span>🔍</span>
        <div style={{width: '32px', height: '32px', backgroundColor: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem'}}>👤</div>
      </div>
    </header>
  );
}