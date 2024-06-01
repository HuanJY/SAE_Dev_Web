import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import HeadBar from './components/HeadBar';
import MainBar from './components/MainBar';
import TabBar from './components/TabBar';
import Board from './BoardPage/Board'
import Modele from './PageApplication/Modele';
import Bienvenue from './WelcomePage/Bienvenue';
import ToDoList from './ToDoList/ToDoList'

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
                    <Route path="/Accueil">
                        <HeadBar/>
                        <MainBar />
                        <Board />
                    </Route>
                    <Route path="/Liste">
                        <HeadBar />
                        <TabBar />
                        <ToDoList />
                    </Route>
                    <Route path="/Board/:idBoard">
                        <HeadBar />
                        <TabBar />
                        <ToDoList />
                    </Route>
                    <Route path="/Modele">
                        <HeadBar/>
                        <TabBar />
                        <Modele />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
