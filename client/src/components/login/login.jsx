import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { Typography } from '@material-ui/core';
import { loginUser } from 'Actions/index';
import { withTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LoginCard from './login-card';
import './autocomplete-fix.css';

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logIn: user => dispatch(loginUser(user)),
  });
};

const mapStateToProps = (state) => {
  return ({
    loggedIn: state.user.loggedIn,
    user: state.user,
    lastAction: state.user.lastAction,
  });
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        userName: '',
        password: '',
      },
      user: props.user,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { user, enqueueSnackbar, lastAction } = props;

    if (lastAction !== state.lastAction) {
      if (lastAction === 'LOGIN_USER_ERROR') {
        enqueueSnackbar('Login Error!', { variant: 'error' });
      } else if (lastAction === 'LOGIN_USER_SUCCESS') {
        enqueueSnackbar('Login Success!', { variant: 'success' });
        createCookie('userToken', user.token, 7);
      }
      return ({ user });
    }
    return null;
  }

  handleStateChange(key, value) {
    const { currentUser } = this.state;

    currentUser[key] = value;
    this.setState({ currentUser });
  }

  handleLogin(e) {
    if (e) {
      e.preventDefault();
    }
    const { logIn } = this.props;
    const { currentUser } = this.state;
    logIn(currentUser);
  }

  render() {
    const { loggedIn, lastAction } = this.props;
    const { currentUser } = this.state;
    const { user } = this.state;

    if (lastAction === 'LOGIN_USER_IN_PROGRESS') {
      return (<Typography>LOADING</Typography>);
    }
    if (loggedIn === 'true') {
      return (
        <React.Fragment>
          <Typography>
            {`Hello ${user.data.firstName} ${user.data.lastName}!`}
          </Typography>
          <Avatar src={`http://localhost:3000/images/${user.data.picture}`} />
        </React.Fragment>);
    }
    return (<LoginCard currentUser={currentUser} parentLoginHandle={this.handleLogin} parentStateChange={this.handleStateChange} />);
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired,
  enqueueSnackbar: PropTypes.func.isRequired, // eslint-disable-line
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        main: PropTypes.string.isRequired,
      }).isRequired,
      getContrastText: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  loggedIn: PropTypes.string.isRequired,
  lastAction: PropTypes.string.isRequired,
};

export default withTheme()(withSnackbar(connect(mapStateToProps, mapDispatchToProps)(Login)));
