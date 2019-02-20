import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import { connect } from 'react-redux'

import {isLogged} from './actions/authActions'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: ''
        }

        this.isAuthenticated = this.isAuthenticated.bind(this)
    }

    componentDidMount() { 
        this.props.dispatch(isLogged())
     }
    
    isAuthenticated() {

    }
    
    
    render() {
        return (
            <>
            <Header brand="Task Manager *Beta"/>
                { 
                    !this.props.authMeta.isLogged ? 
                    <BrowserRouter>
                        <LoginPage/>
                    </BrowserRouter>
                    :
                    <div></div>
                }
            </>
        )
    } 
    
}


function mapStateToProps(state) {
   return {
        authMeta: state.authMeta
    }
}

export default connect(mapStateToProps)(App)