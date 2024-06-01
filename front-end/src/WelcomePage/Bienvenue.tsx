import React from 'react';
import '../App.css'; 
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';


const WelcomePage: React.FC = () => {
  let history = useHistory();

  const handleCreateAccountClick = () => {
    history.push('/connexion');
  };

  return (
    <div className="bienvenue"> 
      <NavBar />
      <div className="mainContent">
        <h1>Bienvenue sur Azu!</h1>
        <p>Votre espace de collaboration simplifié :)</p>
        <div className="contentFlex">
          <div className="infoText">
            <p>
              Azu transforme la façon dont les équipes collaborent sur des projets.<br />
              Avec des tableaux, des listes et des cartes, <br />
              organisez et priorisez vos projets de manière flexible et ludique!<br />
              Chez Azu, nous vous offrons un espace intuitif pour organiser,<br />
              suivre et partager vos tâches avec efficacité et transparence.
            </p>
          </div>
          <div className="imageContainer">
            <img src="../Image/Perso1.png" alt="Capture d'écran de Azu" />
          </div>
        </div>
        <Link to = "/Connexion"> 
         <button className="createAccountButton buttonForm2" onClick={handleCreateAccountClick}>
          Créer un compte
        </button>
        </Link>
       
        <div className="footerImage">
          <img src="../Image/AzuMain.png" alt="Seconde image de Azu" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;