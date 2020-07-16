import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CampaignDetails from './containers/campaign/item';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './containers/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  (config) => {
    if (window.location.href === '/auth/login') {
      return config;
    }

    const tokenKey = sessionStorage.getItem('tokenKey');

    if (tokenKey) {
      config.headers['x-access-token'] = tokenKey;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (window.location.href === '/auth/login') {
      return response;
    }

    const tokenKey = response.headers['x-access-token'];
    if (tokenKey) {
      sessionStorage.setItem('tokenKey', tokenKey);
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/campaigns/:campaignId" component={CampaignDetails} />
      <Footer />
    </Router>
  </Provider>
);

export default App;
