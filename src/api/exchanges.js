import * as api from './httpRequest';

const EXCHANGE_ERROR_STATUS_NOT_200 = 'The response status is not 200.';

/**
 * @typedef {object} Exchange
 * @property {string} object
 * @property {number} rate
 * @property {string} pair
 */

/**
 * @param {string} token
 * @returns {Promise<Array>} returns an array of currencies
 */
export async function getList(token) {
  try {
    const response = await api.get({ path: '/exchanges', token });
    if (response.status===200) {
      return response.data;
    } else {
      console.error(EXCHANGE_ERROR_STATUS_NOT_200);
      throw Error(EXCHANGE_ERROR_STATUS_NOT_200);
    }
  } catch (error) {
    throw error;
  }
}