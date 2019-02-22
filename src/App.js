import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import AuthRoute from './components/AuthRoute';
import MainPage from './pages/MainPage'


class App extends React.Component {

    
    
    render() {
        return (
            <>
            <Header brand="Task Manager *Beta"/>
            <AuthRoute path="/" component={Login} redirectTo="/login" />
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/login' component={Login}/>
                <Route path='/registration' component={SignUp}/>
                <Route path='*' component={PageNotFound}/>
            </Switch>
            </>
        )
    } 
    
}

export default App