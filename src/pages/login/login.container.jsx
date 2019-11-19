import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import login from '@actions/users/login';
import handleOnChangeEmail from './actions/handleOnChangeEmail';
import handleOnChangePassword from './actions/handleOnChangePassword';

import './login.scss';
import LoginHtml from './login.html.jsx';
import loginStrings from './login.strings.js';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { language, token, login, email, password, handleOnChangeEmail, handleOnChangePassword } = this.props;
    if (token) {
      return(<Redirect to="/"/>);
    }
    const strings = loginStrings[language];
    return(
      <div className="login-container">
        <LoginHtml
          strings={strings}
          login={login}
          email={email}
          password={password}
          handleOnChangeEmail={handleOnChangeEmail}
          handleOnChangePassword={handleOnChangePassword}
        />
      </div>
    );
  }
}


LoginContainer.propTypes = {
  language: PropTypes.string.isRequired,
  token: PropTypes.string,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  handleOnChangeEmail: PropTypes.func.isRequired,
  handleOnChangePassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  token: state.user.token,
  email: state.pages.login.email,
  password: state.pages.login.password,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  handleOnChangeEmail: (email) => dispatch(handleOnChangeEmail(email)),
  handleOnChangePassword: (password) => dispatch(handleOnChangePassword(password)),
});

export const LoginContainerComponent = LoginContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);