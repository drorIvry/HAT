import React, {Component} from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.css';
import theme from './toolbox/theme.js';
import './toolbox/theme.css';
import Header from './containers/Header';
import Login from './components/login';
import Help from './components/help';
import Welcome from './components/welcome';
import DashBoard from './components/dashboard';
import history from './history';
import {Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Header/>
                    <Router history={history}>
                        <div>
                            <Route path='/welcome' component={Welcome}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/help" component={Help}/>
                            <Route path="/dashboard" component={DashBoard}/>
                        </div>
                    </Router>

                </div>
            </ThemeProvider>
        );
    }
}


export default App;
