import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './page/Home';
import Projects from './page/Projects';
import RainOnImage from './page/Project/RainOnImage/RainOnImage';
import FlammeRouge from './page/Project/FlammeRouge/FlammeRouge';
import KnowMe from './page/KnowMe';
import Contact from './page/Contact';

import './styles/manifest.scss';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
          <Route path='/project/rain-on-image' component={RainOnImage} />
          <Route path='/project/flamme-rouge' component={FlammeRouge} />
        <Route path='/knowMe' component={KnowMe} />
        <Route path='/contact' component={Contact} />
      </Layout>
    );
  }
}
