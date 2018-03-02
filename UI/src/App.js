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
import Logout from './components/logout';
import history from './history';
import {Router, Route, Switch} from 'react-router-dom';
import Pledge from './components/Pledge';
import Bucket from './components/Bucket';
import AddStuff from './components/AddStuff';
import MotionInput from "./components/MotionInput";
import Status from "./components/Status";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Header/>
                    <Router history={history}>
                        <Switch>
                            <Route path='/welcome' exact component={Welcome}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/help" exact component={Help}/>
                            <Route path="/dashboard" exact component={DashBoard}/>
                            <Route path='/logout' exact component={Logout}/>
                            <Route path='/pledge' exact component={Pledge}/>
                            <Route path='/buckets' exact component={Bucket}/>
                            <Route path='/add' exact component={AddStuff}/>
                            <Route path='/motion' exact component={MotionInput}/>
                            <Route path='/status' exact component={Status}/>
                        </Switch>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}


export default App;
