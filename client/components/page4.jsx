import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Page4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      body: 'You decide on chicken. Trying new stuff can be scary. Besides, you can whip up your favoite chicken dish in 13 minutes flat since you get so much practice. You reach the chicken isle and pick up some chicken. Then you see two people struggling with each other close buy. One is a petite lady and the other is a man twice your size'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Chicken </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/page4', state: this.state }}>
            <FlatButton 
              label="Call Security" 
            />
          </Link>
          <Link to={{ pathname: '/page5', state: this.state }}>
            <FlatButton 
              label="Try To Distract The Man" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Page4;