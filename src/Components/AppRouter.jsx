import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { brutalist, flat, glassmorphism, monochromatic, neumorphism, threed } from './Data';
import Menu from './Menu';
import Flat from './Flat';

const AppRouter = () => {
    return (
        <HashRouter basename={"/trends"}>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/flat-design" />
                </Route>
                <Route path="/no-css">
                    <Flat data={flat} />
                </Route>
                <Route path="/flat-design">
                    <Flat data={flat} />
                </Route>
                <Route path="/glassmorphism">
                    <Flat data={glassmorphism} />
                </Route>
                <Route path="/neumorphism">
                    <Flat data={neumorphism} />
                </Route>
                <Route path="/monochromatic">
                    <Flat data={monochromatic} />
                </Route>
                <Route path="/brutalist">
                    <Flat data={brutalist} />
                </Route>
                <Route path="/threed">
                    <Flat data={threed} />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default AppRouter
