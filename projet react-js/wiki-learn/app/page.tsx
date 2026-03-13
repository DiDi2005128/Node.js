"use client";
import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero__subtitle">&lt; DÉCOUVRIR LE SAVOIR &gt;</div>
          <h1 className="hero__title">Que voulez-vous apprendre aujourd'hui ?</h1>
          
          <div className="hero__search-container">
            <input 
              type="text" 
              className="hero__search-input" 
              placeholder="Rechercher des sujets, articles ou cours..." 
            />
            <button className="hero__search-btn">Rechercher</button>
          </div>
          
          <div className="hero__trends">
            Tendances : 
            <span className="hero__trend-item">Informatique Quantique</span>
            <span className="hero__trend-item">Architecture Moderne</span>
            <span className="hero__trend-item">Art de la Renaissance</span>
          </div>
        </section>

        {/* SECTION: SUJETS A LA UNE */}
        <section className="content">
          <div className="section-header">
            <div>
              <h2 className="section-header__title">Sujets à la une</h2>
              <p className="section-header__desc">Des parcours d'apprentissage curatés pour chaque curiosité</p>
            </div>
            <a href="#" className="section-header__link">Voir tous les sujets +</a>
          </div>

          <div className="card-grid">
            {/* Carte 1: Mathématiques */}
            <div className="card">
              <div className="card__image-container card__image-container--blue">Σ</div>
              <div className="card__body">
                <div className="card__meta">124 ARTICLES</div>
                <h3 className="card__title">Mathématiques</h3>
                <p className="card__desc">De l'arithmétique de base au calcul complexe et à la théorie des groupes. Explorez le langage universel.</p>
                <span className="card__link">Explorer le parcours &rarr;</span>
              </div>
            </div>

            {/* Carte 2: Programmation (Focus MVP cliquable vers /exercice) */}
            <div className="card" onClick={() => router.push('/exercice')}>
              <div className="card__image-container card__image-container--purple">&lt; / &gt;</div>
              <div className="card__body">
                <div className="card__meta">218 ARTICLES</div>
                <h3 className="card__title">Programmation</h3>
                <p className="card__desc">Maîtrisez la logique du monde numérique. Plongez dans Python, JavaScript et les fondamentaux de l'IA.</p>
                <span className="card__link" style={{cursor: 'pointer'}}>Explorer le parcours &rarr;</span>
              </div>
            </div>

            {/* Carte 3: Histoire */}
            <div className="card">
              <div className="card__image-container card__image-container--pink">🏛️</div>
              <div className="card__body">
                <div className="card__meta">341 ARTICLES</div>
                <h3 className="card__title">History</h3>
                <p className="card__desc">Les récits de la civilisation humaine. Voyagez à travers les époques qui ont façonné notre monde moderne.</p>
                <span className="card__link">Explorer le parcours &rarr;</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CATEGORIES POPULAIRES */}
        <section className="categories">
          <h2 className="categories__title">Catégories populaires</h2>
          <div className="categories__grid">
            <div className="category-item"><span className="category-item__icon">🔬</span> Science</div>
            <div className="category-item"><span className="category-item__icon">🎨</span> Arts</div>
            <div className="category-item"><span className="category-item__icon">🌍</span> Langues</div>
            <div className="category-item"><span className="category-item__icon">💼</span> Affaires</div>
            <div className="category-item"><span className="category-item__icon">🧠</span> Philosophie</div>
            <div className="category-item"><span className="category-item__icon">🎵</span> Musique</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div style={{fontWeight: '800', color: '#0A192F'}}><span style={{color: '#8FD6E8'}}>💠</span> WikiLearn</div>
          <div className="footer__links">
            <span>Documentation</span>
            <span>Politique de Confidentialité</span>
            <span>Conditions d'utilisation</span>
            <span>Contribuer</span>
          </div>
          <div>© 2024 WikiLearn. Le savoir est pour tout le monde.</div>
        </footer>
      </main>
    </>
  );
}