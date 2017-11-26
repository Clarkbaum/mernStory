import React from 'react';
//import { Link } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'whatwg-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      char1: 'char1',
      char2: 'char2',
      char3: 'char3'
    };
  }

  handleStart() {
    console.log('handleStart clicked')
  }

  textChange(type, value) {
    if(type === 'char1'){
      this.setState({char1: value})
    } else if (type === 'char2') {
      this.setState({char2: value})
    } else if (type === 'char3') {
      this.setState({char3: value})
    }
  }
  

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>MERN Choose-Your-Own-Adventure Story </h1>
          <br/>
          <TextField
            name='char1'
            floatingLabelText='char1'
            fullWidth={true}
            onChange={(e, value) => this.textChange('char1', value)}
          />
          <TextField
            name='char2'
            floatingLabelText='char2'
            fullWidth={true}
            onChange={(e, value) => this.textChange('char2', value)}
          />
          <TextField
            name='char3'
            floatingLabelText='char3'
            fullWidth={true}
            onChange={(e, value) => this.textChange('char3', value)}
          />
          <TextField
            name='email'
            floatingLabelText='email'
            fullWidth={true}
            onChange={(e, value) => this.textChange('email', value)}
          />
          <Link to={{ pathname: '/arrived', state: this.state }}>
            <FlatButton 
              label="Start Story" 
              onTouchTap={this.handleStart.bind(this)}
            />
          </Link>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;