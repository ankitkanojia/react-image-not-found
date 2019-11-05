import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <ul>
                        <li className={this.props.location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                        <li className={this.props.location.pathname === "/" ? "active" : ""}><Link to="/imageverification">Image Verification</Link></li>
                    </ul>
                </header>
            </React.Fragment>
        )
    }
}

export default withRouter(Header);