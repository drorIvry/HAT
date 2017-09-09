import React, {Component} from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.css';
import theme from './toolbox/theme.js';
import './toolbox/theme.css';
import Header from './containers/Header';
import Login from './components/login';
import Help from './components/help';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Header/>

                    <Router>
                        <div>
                            <Route path="/login" component={Login}/>
                            <Route path="/help" component={Help}/>
                        </div>
                    </Router>

                </div>
            </ThemeProvider>
        );
    }
}


export default App;
