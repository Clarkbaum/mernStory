import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("props.location.state", props.location.state)

    this.state = {
      data: [],
      body: 'your name is ' + props.location.state.char1 + '. It is been a long day but you still have one last chore to do. You have to go grocery shopping. You arrive and wonder over to the produce deparment. You stand in front of the tomataos and stick your hand in your pocket only to realize you forgot your grocery list. You let out a large sigh, wondeirng if you should just go home or make a guess what you needed knowing full well you will undoubtedly have to come back soon to get what you inevitably forgot.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.state.body}
          <br />
          <Link to={{ pathname: '/page2', state: this.state }}>
            <FlatButton 
              label="Leave Store" 
            />
          </Link>
          <Link to={{ pathname: '/page3', state: this.state }}>
          <FlatButton 
            label="Guess What You Needed" 
          />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Page1;