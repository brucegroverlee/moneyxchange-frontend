import React from 'react';
import { connect } from 'react-redux';
import history from '@utils/history';

const CheckSessionContainer = ({token, children}) => {
  if (token) {
    return (
      <div className="check-session-container">{children}</div>
    );
  } else {
    history.replace({
      pathname: '/login'
    });
    return(<React.Fragment/>);
  }
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckSessionContainer);
