import './App.css';

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import CheckoutState from './Context/CheckoutState';
import Home from './Components/Home';
import Success from './Components/Success';


function App() {
  return (
    <>  

    <CheckoutState>

      <Router>

        <Switch>

          <Route path="/success" component={Success}/>
          <Route path="/" component={Home}/>

        </Switch>

      </Router>

    </CheckoutState>
    </>
  );
}

export default App;
