import React from 'react';
import '../App.css';  

const Connexion: React.FC = () => {
    return (
        <div className="connexion-container">
            <div className="connexion-loginSection">
                <h2>Se Connecter</h2>
                <form className="connexion-form">
                    <input type="email" placeholder="Email" className="connexion-input" required />
                    <input type="password" placeholder="Mot de passe" className="connexion-input" required />
                    <button type="submit" className="connexion-button">Se Connecter</button>
                </form>
            </div>
            <div className="connexion-signupSection">
                <h2>Créer un Compte</h2>
                <form className="connexion-form">
                    <input type="text" placeholder="Nom" className="connexion-input" required />
                    <input type="email" placeholder="Email" className="connexion-input" required />
                    <input type="password" placeholder="Mot de passe" className="connexion-input" required />
                    <button type="submit" className="connexion-button">S'inscrire</button>
                </form>
            </div>
        </div>
    );
}

export default Connexion;

