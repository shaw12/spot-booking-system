import './App.css';
import { BrowserRouter ,Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route path="/slot/:abc" >
            <Form />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
