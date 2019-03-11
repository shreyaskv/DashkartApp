import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions, eventActions } from '../_actions';
import { PrivateRoute, Loading } from '../_components';
import { HomePage } from '../HomePage';


class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
            console.log(location, action)
        });
    }

    render() {
        return ( 
            <Router history={history}>
                <div className="h100">
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage} refreshed={this.props.refreshed} />
                    <PrivateRoute exact path="/:id" component={HomePage} refreshed={this.props.refreshed} />
                </Switch>
                </div>
            </Router>
        );
    }
}




const connectedApp = connect(null, null)(App);
export { connectedApp as App }; 