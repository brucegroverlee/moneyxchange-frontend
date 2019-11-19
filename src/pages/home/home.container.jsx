import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import Login from './home.html.jsx/index.js';

const HomeContainer = ({ language, token }) => {
  if (!token) {
    return(<Redirect to="/login"/>);
  }

  return(
    <div className="home-container">
      Home
    </div>
  );
};

HomeContainer.propTypes = {
  language: PropTypes.string.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  language: state.language,
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);