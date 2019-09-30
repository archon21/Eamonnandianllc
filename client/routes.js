import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Home, Card } from './components';
import { NotFound, Loader } from './sub-components';
import Privacy from './components/Footer/Privacy';
class Routes extends Component {
  state = { mounted: false };
  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    const { mounted } = this.state;
    return mounted ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services/cards/:name" component={Card} />
        <Route exact path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    ) : (
      <Loader />
    );
  }
}

export default Routes;
