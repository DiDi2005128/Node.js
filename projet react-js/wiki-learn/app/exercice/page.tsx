"use client";
import React, { useState } from 'react';
import Header from '../../components/Header';

export default function Exercice() {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = () => {
    if (code.includes('for')) {
      setFeedback('success');
    } else {
      setFeedback('error');
    }
  };

  return (
    <>
      <Header />
      <div className="exercice">
        <div className="exercice__sidebar">
          {/* L'ERREUR ÉTAIT ICI : On remplace les > par &gt; */}
          <p className="exercice__step">Cours &gt; Bases de Python &gt; Leçon 4</p>
          <h1 className="exercice__title">Exercice : Itérer avec les boucles For</h1>
          
          <h3>Objectif</h3>
          <p>Dans cet exercice, vous allez vous entraîner à utiliser une boucle `for` de base pour itérer à travers une liste.</p>
          
          <h3>Étape par Étape</h3>
          <ul>
            <li className="exercice__step">Définissez la variable dans votre boucle.</li>
            <li className="exercice__step">Utilisez la fonction `print()` à l'intérieur de la boucle.</li>
          </ul>
        </div>

        <div className="exercice__editor-area">
          <h3>main.py</h3>
          <p style={{color: '#64748B'}}>fruits = ["pomme", "banane", "cerise"]</p>
          
          <textarea 
            className="exercice__textarea" 
            placeholder="# Écrivez votre boucle for ici..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          
          <button className="exercice__btn" onClick={handleSubmit}>
            Soumettre la réponse
          </button>

          {feedback === 'error' && (
            <div className="exercice__feedback exercice__feedback--error">
              <strong>Pas tout à fait.</strong> Vérifiez votre instruction `for`.
            </div>
          )}
          {feedback === 'success' && (
            <div className="exercice__feedback exercice__feedback--success">
              <strong>Bravo !</strong> Vous avez gagné +50 XP. Module débloqué !
            </div>
          )}
        </div>
      </div>
    </>
  );
}