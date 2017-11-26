import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Check extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      body: 'You decide to see if the women is ok first. You kneel down and ask "hey ma\'am are you ok?" She looks up at you and says "thank you so much, he was trying to steal my purse. I am ' + this.state.char2 + ' by the way.'
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Check Up On The Women </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/who', state: this.state }}>
            <FlatButton 
              label="'Who Was That Guy?'" 
            />
          </Link>
          <Link to={{ pathname: '/drink', state: this.state }}>
            <FlatButton 
              label="Ask If She Would Like A Drink" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Check;