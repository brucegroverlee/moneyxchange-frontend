import React from 'react';
import { render } from 'enzyme';

import { LoginContainerComponent as LoginContainer } from './login.container';

const setup = (language, token) => {
  const actions = {
    // handleLoginContainerClose: jest.fn(),
  };

  const component = render(
    <LoginContainer
      language={language}
      token={token}
      {...actions}
    />
  );

  return {
    component: component,
    actions: actions,
    loginButton: component.find('#login-html__button'),
  }
};

describe('Login Container Component', () => {

  test('Should be in English', () => {
    const { component, loginButton } = setup('EN', null);
    expect(loginButton.text()).toEqual('Login');
  });

  test('Should be in Spanish', () => {
    const { component, loginButton } = setup('ES', null);
    expect(loginButton.text()).toEqual('Entrar');
  });

});