import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';

// Import des barres
import HeadBar from './components/HeadBar'
import MainBar from './components/MainBar';
import TabBar from './components/TabBar';

// Import des différentes pages
import MenuPrincipale from './PageApplication/MenuPrincipale';
import Modele from './PageApplication/Modele';

function App() {
  return (
    <div>
      <HeadBar/>
      <TabBar/>
      <Modele/>
    </div>
  );
}

export default App;