import React from "react";

import './App.css';
import Background from "./components/background";
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import TransparentNavBar from "./components/tranparent-navbar";
import Footer from "./components/footer";
import CardGrid from "./components/card-grid";
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import Guidance from "./components/guidance";

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Background/>
            <TransparentNavBar/>
            <Switch>
                <Route exact path="/">
                    <CardGrid/>
                </Route>
                <Route path="/huong-dan">
                    <Guidance />
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}

library.add(fas)

export default App;
