import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import About from './components/About';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route path='/About' component={About} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/' component={Home} />
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
