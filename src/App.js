import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import About from './components/About/About';
import Dropdown from './components/Dropdown/Dropdown';
import Portfolio from './components/Portfolio/Portfolio';
import Signin from './components/SignIn/SignIn';
import SystemLogs from './Pages/System Logs/SystemLogs';
import PopupPreview from './Pages/Popup Preview/PopupPreview';
import ScrollToTop from './components/ScrollToTop';
import Criteria from './Pages/Criteria/criteria';

const initialState = {
  route: 'signin',
  isSignedIn: false,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
    };
  }

  // [isOpen, setIsOpen] = useState(false);

  // toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  // useEffect = () => {
  //   const hideMenu = () => {
  //     if ((window.innerWidth > 768) & isOpen) {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener('resize', hideMenu);

  //   return () => {
  //     window.removeEventListener('resize', hideMenu);
  //   };
  // };

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
          {/* <Nav toggle={toggle} /> */}
          {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}

          {route === 'signin' ? (
            <Signin onRouteChange={this.onRouteChange} />
          ) : (
            <div>
              <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              <ScrollToTop />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Fragment>
                      <Header onRouteChange={this.onRouteChange} />
                      <About />
                      <Portfolio />
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
