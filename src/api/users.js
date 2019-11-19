import * as api from './httpRequest';

const LOGIN_ERROR_STATUS_NOT_202 = 'login response status is not 202.';

/**
 * 
 * @param {object} payload 
 * @property {string} email
 * @property {string} password
 * @returns {Promise<object>}
 * @property {string} response.token
 */
export async function login(payload) {
  try {
    const response = await api.post({ path: '/login', data: {...payload} });
    if (response.status===202) {
      return response.data;
    } else {
      console.error(LOGIN_ERROR_STATUS_NOT_202);
      throw Error(LOGIN_ERROR_STATUS_NOT_202);
    }
  } catch (error) {
    throw error;
  }
}