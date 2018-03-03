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
import Home from './components/Home';
import history from './history';
import {Router, Route, Switch} from 'react-router-dom';
import Pledge from './components/Pledge';
import Bucket from './components/Bucket';
import NotFound from './components/NotFound';
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
                            <Route path='/welcome' exact={true} component={Welcome}/>
                            <Route path="/login" exact={true} component={Login}/>
                            <Route path="/help" exact={true} component={Help}/>
                            <Route path="/dashboard" exact={true} component={DashBoard}/>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path='/logout' exact={true} component={Logout}/>
                            <Route path='/pledge' exact={true} component={Pledge}/>
                            <Route path='/buckets' exact={true} component={Bucket}/>
                            <Route path='/add' exact={true} component={AddStuff}/>
                            <Route path='/motion' exact={true} component={MotionInput}/>
                            <Route path='/status' exact={true} component={Status}/>
                            <Route path="/*" exact={true} component={NotFound}/>
                        </Switch>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}


export default App;
