import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Drink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'You decide to seize the moment of looking like a hero to get a date. "No problem at all I am glad I could help" you say. "Would you like to go grab a drink? There\'s a coffee place around the corner. Also my name is ' + this.state.char1 + '." She smiles "that sounds like a wonderful idea."'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Whould You Like To Get A Drink? </h2>
          {this.state.body}
          <br/>
          <h4> You Got Yourself A Date! </h4>
          <h4> END </h4>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Drink;