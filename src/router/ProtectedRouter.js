import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Servicios } from "../pages/Servicios";
import { Nosotros } from "../pages/Nosotros";
import { Soporte } from "../pages/Soporte";
import { Contacto} from "../pages/Contacto";
import getIn from 'lodash/get';
import Home from "../pages/Home";
import { getCurrentLocale } from 'react-easy-i18n';
import Landing from '../components/layouts/Landing';

const  withLandingLayout = (Component) => {
    return function (props) {
        const lang = getIn(props, 'match.params.locale', 'es');
        return (
            <Landing lang={lang}>
                <Component {...props} />
            </Landing>
        );
    };
};

class ProtectedRouter extends Component {
    render() {
        return (
            <Router locale={getCurrentLocale}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={withLandingLayout(Home)}
                    />
                     <Route
                        exact
                        path="/:locale"
                        component={withLandingLayout(Home)}
                    />
                    <Route
                        exact
                        path="/:locale/servicios"
                        component={withLandingLayout(Servicios)}
                    />
                    <Route
                        exact
                        path="/:locale/nosotros"
                        component={withLandingLayout(Nosotros)}
                    />
                    <Route
                        exact
                        path="/:locale/soporte"
                        component={withLandingLayout(Soporte)}
                    />
                    <Route
                        exact
                        path="/:locale/contacto"
                        component={withLandingLayout(Contacto)}
                    />
                </Switch>
            </Router>
        );
    }
}

export default ProtectedRouter;