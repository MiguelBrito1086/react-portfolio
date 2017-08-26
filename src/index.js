import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import About from './components/About';
import BaseLayout from './components/BaseLayout';
import Contact from './components/Contact';
import References from './components/References';

ReactDOM.render(
<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/About' component={About} />
      <Route exact path='/Portfolio' component={Portfolio} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/References' component={References} />
      <Route exact path='/' component={Home} />
    </Switch>
  </BaseLayout>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
