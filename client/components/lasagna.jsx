import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch } from 'react-router-dom';

import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Lasagna extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: props.location.state.char1,
      char2: props.location.state.char2,
      char3: props.location.state.char3,
      styles: props.location.state.styles,
      body: 'You decide on some lasagna. Its time for something new, you eat chicken way too much. You walk on over to the lasagna to browse their options. While in the lasagna isle you hear some noise from the chicken isle ',
      story: props.location.state.story + 'You decide on some lasagna. Its time for something new, you eat chicken way too much. You walk on over to the lasagna to browse their options. While in the lasagna isle you hear some noise from the chicken isle '
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h2> Lasagna </h2>
          {this.state.body}
          <br/>
          <Link to={{ pathname: '/continue', state: this.state }}>
            <FlatButton 
              label="Continue Shopping" 
            />
          </Link>
          <Link to={{ pathname: '/look', state: this.state }}>
            <FlatButton 
              label="Look What All The Noise Is About" 
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Lasagna;