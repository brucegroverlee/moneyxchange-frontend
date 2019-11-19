import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Login = ({ strings, login, email, password, handleOnChangeEmail, handleOnChangePassword, /* error */ }) => {
  return(
    <div className="login-html">
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder={strings.emailPlaceholderInput}
            value={email}
            onChange={(event) => handleOnChangeEmail(event.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder={strings.passwordPlaceholderInput}
            value={password}
            onChange={(event) => handleOnChangePassword(event.target.value)}
            type='password'
          />

          <Button 
            id="login-html__button" 
            color='teal' 
            fluid size='large'
            onClick={() => login()}
          >
            {strings.loginButton}
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

Login.propTypes = {
  strings: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  handleOnChangeEmail: PropTypes.func.isRequired,
  handleOnChangePassword: PropTypes.func.isRequired,
};

export default Login;