import React from 'react';
import './CSS/about.css';

class Help extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className={'aboutContainer'}>
      <div className={'about'}>
        <h3>Hackim American Tour</h3>
        <p className={'aboutText'}>This is the motherfucking H.A.T management application. Here we will plan the trip, gather places to go to, find food to eat and titties to see. in order to pass a trip changing motion, at least 3 pledged Hacks are needed to vote on an issue.</p>
        <p className={'license'}> © licensed to Hack Dror</p>
      </div>
    </div>;
  }

  componentDidMount() {
  }
}

export default Help;
