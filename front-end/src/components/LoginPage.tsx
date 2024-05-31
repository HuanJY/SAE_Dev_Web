import '../App.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();
  const [loginName, setLoginName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [actionType, setActionType] = useState<'login' | 'register'>('login');


  async function loginUser(loginName: string, password: string) {
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loginName,
          password
        })
      });

      const responseBody = await response.text();

      if (!response.ok) {
        throw new Error(responseBody || `HTTP error! status: ${response.status}`);
      }

      return { message: responseBody };
    } catch (error: unknown) {
      console.error("An error occurred:", error);
      const message = error instanceof Error ? error.message : "An unexpected error occurred";
      return { message };
    }
  }

  async function registerUser(loginName: string, password: string) {
    try {
      const response = await fetch('api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loginName,
          passwordHash: password
        })
      });

      const responseBody = await response.text(); 

      if (!response.ok) {
        throw new Error(responseBody || `HTTP error! status: ${response.status}`);
      }

      return { message: responseBody };
    } catch (error: unknown) {
      console.error("An error occurred:", error);
      const message = error instanceof Error ? error.message : "An unexpected error occurred";
      return { message };
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    const response = actionType === 'login' ? await loginUser(loginName, password) : await registerUser(loginName, password);
    setLoading(false);

    if (response.message) {
      if (response.message.includes("successful")) {
        alert(response.message);
        history.push('/accueil'); // On peut rediriger l'utilisateur ou faire d'autres traitements post-connexion ici
      } else {
        alert(response.message);
      }
    } else {
      alert("Une erreur inattendue est survenue.");
    }
  };

  function handleForgotPasswordClick(event: React.MouseEvent) {
    event.preventDefault();  
    alert("Haha looser!");
  }

  return (
    <div className="login-container">
      <h2>Connexion / Inscription</h2>
      {loading ? (
        <div>Chargement...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="loginName">Pseudo</label>
            <input
              type="text"
              id="loginName"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={() => setActionType('login')}>Se connecter</button>
          <button type="submit" onClick={() => setActionType('register')}>S'inscrire</button>
        </form>
      )}
      <p><a href="#!" onClick={handleForgotPasswordClick}>Mot de passe oublié?</a></p>
    </div>
  );
}

export default LoginPage;
