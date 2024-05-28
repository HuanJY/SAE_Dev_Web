import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import HeadBar from './components/HeadBar';
import MainBar from './components/MainBar';
import TabBar from './components/TabBar';
import MenuPrincipale from './PageApplication/MenuPrincipale';
import Modele from './PageApplication/Modele';
import ToDoList from './PageApplication/ToDoList';
import ToDo from './PageApplication/ToDo';


function App(): JSX.Element {
    return (
        <div className="AppForm">
            <Router>
                <HeadBar/>
                <Switch>
                    <Route path="/" exact>
                        <MainBar />
                        <MenuPrincipale />
                    </Route>
                    <Route path="/Liste">
                        <TabBar />
                        <ToDoList/>
                    </Route>
                    <Route path="/board/:idBoard">
                        <TabBar />
                        <ToDo/>
                    </Route>
                    <Route path="/Modele">
                        <TabBar />
                        <Modele />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
