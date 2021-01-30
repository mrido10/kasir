import {Route, BrowserRouter, Switch} from 'react-router-dom'
import UserRegister from './pages/user/UserRegister'
import './App.css';

function App() {
  return (
    <div id='container'>
      <BrowserRouter>
        <Switch>
          <Route path='/user' exact component={UserRegister} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
