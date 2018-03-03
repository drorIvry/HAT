import React, {Component} from 'react';
import './CSS/NotFound.css'
class NotFound extends Component {
    render() {
        return (
            <div className={'notFoundWrapper'}>
                <h1>404</h1>
                <p>Page Not Found</p>
            </div>
        );
    }
}

export default NotFound;
