import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <body className="hold-transition login-page">  
    <Router>
      <div>
        <Login/>
        <Route path="/home" component={Home}></Route>
      </div>
    </Router>
    </body>
  );
}

export default App;
