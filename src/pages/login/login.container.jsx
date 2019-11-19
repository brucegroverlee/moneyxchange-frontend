import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import login from '@actions/users/login';

//import Login from './login.html.jsx';

const LoginContainer = ({ language, token, /* login */ }) => {
  if (token) {
    return(<Redirect to="/"/>);
  }
  return(
    <div className="login-container">
      Login
    </div>
  );
};

LoginContainer.propTypes = {
  language: PropTypes.string.isRequired,
  token: PropTypes.string,
  // login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  // login: () => dispatch(login()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);