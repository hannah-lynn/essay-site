import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import About from './components/About/About';
import Essays from './components/Essays/Essays';
import Signin from './components/SignIn/SignIn';
import SystemLogs from './Pages/System Logs/SystemLogs';
import PopupPreview from './Pages/Popup Preview/PopupPreview';
import ScrollToTop from './components/ScrollToTop';
import Criteria from './Pages/Criteria/criteria';
import Stack from './components/Tech Stack/stack';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;

    return (
      <Router>
        <div className='App'>
          {route === 'signin' ? (
            <Signin onRouteChange={this.onRouteChange} />
          ) : (
            <div>
              <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              <ScrollToTop />
              <Switch>
                <Route
                  exact
                  path='/essay-site'
                  render={() => (
                    <Fragment>
                      <Header onRouteChange={this.onRouteChange} />
                      <About />
                      <Essays />
                      <Stack />
                    </Fragment>
                  )}
                />
                <Route exact path='/system-logs' component={SystemLogs} />
                <Route exact path='/popup-preview' component={PopupPreview} />
                <Route exact path='/criteria' component={Criteria} />
              </Switch>
              <Footer />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
