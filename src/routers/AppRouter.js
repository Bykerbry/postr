import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import FeedPage from '../components/FeedPage'
import HomePage from '../components/HomePage'
import HelpPage from '../components/HelpPage'


const AppRouter = () => (
    <div>
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact={true} path='/'>
                    <HomePage />
                </Route>
                <Route exact={true} path='/feed'>
                    <FeedPage />
                </Route>
                <Route exact={true} path='/help'>
                    <HelpPage />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
)

export default AppRouter