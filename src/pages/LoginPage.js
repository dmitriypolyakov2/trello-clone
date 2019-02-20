
import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return(
            <form className="form-signin" role="form">
                <h2 className="form-signin-heading">Please sign in</h2>
                <input type="email" className="form-control" placeholder="Email address" required autoFocus/>
                <input type="password" className="form-control" placeholder="Password" required/>
                <label className="checkbox">
                    <input type="checkbox" value="remember-me"/> Remember me 
                </label>
                <Link to='/repassword'> Забыли пароль?</Link>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <Link to='/registration'>Зарегистрироваться</Link>
            </form>
        )
    }
}

export default Login