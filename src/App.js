import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Organisms/Layout';
import Home from './page/Home';
import Contact from './page/Contact';
import Projects from './page/Projects';

import './styles/manifest.scss';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Layout>
    );
  }
}
