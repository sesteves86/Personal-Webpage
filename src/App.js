import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './page/Home';
import Projects from './page/Projects';
import HireMe from './page/HireMe';
import Contact from './page/Contact';

import './styles/manifest.scss';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/hireMe' component={HireMe} />
        <Route path='/contact' component={Contact} />
      </Layout>
    );
  }
}
