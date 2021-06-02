import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import {Route, Switch, Redirect} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact path = '/'
          render={() => <Redirect to = '/public' />}
        />

        <Route
          path = '/public'
          render={() => <Home />}
        />

        <Route 
          path='/products'
          render={() => <Products />}
        />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
