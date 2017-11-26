import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Arrived extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'Your name is ' + props.location.state.char1 + '. It is been a long day but you still have one last chore to do. You have to go grocery shopping. You arrive and wonder over to the produce deparment. You stand in front of the tomataos and stick your hand in your pocket only to realize you forgot your grocery list. You let out a large sigh, wondeirng if you should just go home or make a guess what you needed knowing full well you will undoubtedly have to come back soon to get what you inevitably forgot.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Arrived At The Grocery Store </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/leave', state: this.state }}>
            <FlatButton 
              label="Leave Store" 
            />
          </Link>
          <Link to={{ pathname: '/stay', state: this.state }}>
            <FlatButton 
              label="Guess What You Needed" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Arrived;