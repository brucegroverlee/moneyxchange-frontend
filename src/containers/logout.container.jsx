import React from 'react';
import { connect } from 'react-redux';
import logout from '@actions/users/logout';

const logoutContainer = ({ logout }) => {
  logout();
  return(
    <div className="logout-container"></div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(logoutContainer);