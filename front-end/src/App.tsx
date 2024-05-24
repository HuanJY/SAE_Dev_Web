import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import HeadBar from './components/HeadBar';
import MainBar from './components/MainBar';
import TabBar from './components/TabBar';
import MenuPrincipale from './PageApplication/MenuPrincipale';
import Modele from './PageApplication/Modele';
import Bienvenue from './WelcomePage/Bienvenue';  
import NavBar from './WelcomePage/NavBar';
import Connexion from './Connexion/Connexion';
import { Login } from '@mui/icons-material';

function App(): JSX.Element {
    return (
        <div className="AppForm">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Bienvenue />  

                    </Route>
                    <Route path="/Connexion" >
                        <LoginPage />  

                    </Route>
                    <Route path="/accueil">
                        <MainBar />
                        <MenuPrincipale />
                        <HeadBar/>
                    </Route>
                    <Route path="/Liste">
                        <TabBar />
                        <HeadBar/>
                    </Route>
                    <Route path="/Modele">
                        <TabBar />
                        <Modele />
                        <HeadBar/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
