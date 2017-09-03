import React, {Component} from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.css';
import theme from './toolbox/theme.js';
import './toolbox/theme.css';
import Header from './components/header/Header';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
    );
  }
}

export default App;
