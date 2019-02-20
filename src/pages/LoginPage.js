import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Login from '../components/Login';
import SignUp from '../components/SignUp';
import PageNotFound from '../components/PageNotFound';


export default class LoginPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/registration' component={SignUp}/>
                    <Route path='*' component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}