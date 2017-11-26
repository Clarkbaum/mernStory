import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Chicken extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide on chicken. Trying new stuff can be scary. Besides, you can whip up your favoite chicken dish in 13 minutes flat since you get so much practice. You reach the chicken isle and pick up some chicken. Then you see two people struggling with each other close buy. One is a petite lady and the other is a man twice your size ', 
      story: props.location.state.story + 'You decide on chicken. Trying new stuff can be scary. Besides, you can whip up your favoite chicken dish in 13 minutes flat since you get so much practice. You reach the chicken isle and pick up some chicken. Then you see two people struggling with each other close buy. One is a petite lady and the other is a man twice your size '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2 style={this.state.styles.header}>
            <span style={this.state.styles.topTitle}>Chicken </span>
          </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/security', state: this.state }}>
            <FlatButton 
              label="Call Security" 
            />
          </Link>
          <Link to={{ pathname: '/distract', state: this.state }}>
            <FlatButton 
              label="Try To Distract The Man" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Chicken;