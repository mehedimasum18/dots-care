import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from './components/contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Home/Services/Services';
import Detail from './components/Details/Detail/Detail';
import About from './components/Home/About/About';
import Contacts from './components/Home/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Home/Footer/Footer';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  ); 
}

export default App;
