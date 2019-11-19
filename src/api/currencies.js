import * as api from './httpRequest';

const CURRENCIES_ERROR_STATUS_NOT_200 = 'The response status is not 200.';

/**
 * @typedef {object} Currency
 * @property {string} object
 * @property {string} code
 * @property {string} symbol
 * @property {boolean} isBase
 */

/**
 * @param {string} token
 * @returns {Promise<Array>} returns an array of currencies
 */
export async function getList(token) {
  try {
    const response = await api.get({ path: '/currencies', token });
    if (response.status===200) {
      return response.data;
    } else {
      console.error(CURRENCIES_ERROR_STATUS_NOT_200);
      throw Error(CURRENCIES_ERROR_STATUS_NOT_200);
    }
  } catch (error) {
    throw error;
  }
}