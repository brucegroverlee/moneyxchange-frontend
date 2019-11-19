import React from 'react';
import PropTypes from 'prop-types';

import './login.scss';

import strings from './home.strings.js';

const Login = ({ language, login, error }) => {
  const errorComponent = error === '' ? <React.Fragment/> : (<div className="page-login__error">Error: {error}</div>);
  return(
    <div className="page-login">
      <div className="page-login__main">

        <div className="page-login__main__left">
          <div className="page-login__main__left__content">
            <h4 className="page-login__main__left__content__title">{strings[language].left_title}</h4>
            <hr className="page-login__main__left__content__hr"/>
            <button className="sherpon-button-facebook" onClick={ () => login() }>Facebook</button>
            {errorComponent}
          </div>
        </div>

        <div className="page-login__main__right">
          <h4 className="page-login__main__right__title">{strings[language].right_title}</h4>
          <hr className="page-login__main__right__hr"/>
          <div className="page-login__main__right__message">
            {strings[language].right_message}
          </div>
        </div>
        
      </div>
    </div>
  );
};

Login.propTypes = {
  language: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;