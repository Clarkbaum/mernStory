import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Page5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      body: 'You decide on some lasagna. Its time for something new, you eat chicken way way too much. You walk on over to the lasagna to browse their options. While in the lasagna isle you hear some noise from the chicken isle'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Lasagna </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/page4', state: this.state }}>
            <FlatButton 
              label="Continue Shopping" 
            />
          </Link>
          <Link to={{ pathname: '/page5', state: this.state }}>
            <FlatButton 
              label="Look What All The Noise Is About" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Page5;