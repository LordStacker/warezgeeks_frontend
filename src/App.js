import logo from './logo.svg';
import './styles/App.css';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import injectContext from './store/appContext';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Route>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
