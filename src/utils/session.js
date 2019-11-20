const sessionName = 'app_user';
const exchangesName = 'app_exchanges';
const currenciesName = 'app_currencies';


/** START STORAGE */
export const setStorage = (storageName, payload) => {
  localStorage.setItem(storageName,JSON.stringify(payload));
  return true;
};

export const initStorage = (storageName, initialState) => {
  const sessionContent = localStorage.getItem(storageName);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanStorage = (storageName) => {
  localStorage.removeItem(storageName);
};
/** END STORAGE */

/** START USER */
export const setUser = (user) => {
  localStorage.setItem(sessionName,JSON.stringify(user));
  return true;
};

export const initUser = (initialState) => {
  const sessionContent = localStorage.getItem(sessionName);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanUser = () => {
  localStorage.removeItem(sessionName);
};
/** END USER */

/** START EXCHANGES */
export const setExchanges = (exchanges) => {
  localStorage.setItem(exchangesName,JSON.stringify(exchanges));
  return true;
};

export const initExchanges = (initialState) => {
  const sessionContent = localStorage.getItem(exchangesName);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanExchanges = () => {
  localStorage.removeItem(exchangesName);
};
/** END EXCHANGES */

/** START CURRENCIES */
export const setCurrencies = (currencies) => {
  localStorage.setItem(currenciesName,JSON.stringify(currencies));
  return true;
};

export const initCurrencies = (initialState) => {
  const sessionContent = localStorage.getItem(currenciesName);
  if (sessionContent === null) {
    return initialState;
  } else {
    return JSON.parse(sessionContent);
  }
};

export const cleanCurrencies = () => {
  localStorage.removeItem(currenciesName);
};
/** END CURRENCIES */
