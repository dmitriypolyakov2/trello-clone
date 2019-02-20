import React from 'react'
import {Link} from 'react-router-dom'


class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">{this.props.brand}</Link>
                </div>
            </nav>
        )
    }
}

export default Header
