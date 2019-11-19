import axios from 'axios';

/**
 * @param {object} payload 
 * @property {string} path - E.g. "/users"
 * @property {string} token
 * 
 * @returns {Promise<object>}
 * @property {number} response.status
 * @property {object} response.data
 */
export async function get(payload) {
  try {
    return axios({
      method: 'get',
      url: `${process.env.API_ENDPOINT}${payload.path}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${payload.token}`
      },
    });
  } catch (error) {
    throw error;
  }
}

/**
 * @param {object} payload 
 * @property {string} path - E.g. "/users"
 * @property {string} token
 * @property {object} data
 * 
 * @returns {Promise<object>}
 * @property {number} response.status
 * @property {object} response.data
 */
export async function post(payload) {
  try {
    return axios({
      method: 'post',
      url: `${process.env.API_ENDPOINT}${payload.path}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${payload.token}`
      },
      data: payload.data,
    });
  } catch (error) {
    throw error;
  }
}

/**
 * @param {object} payload 
 * @property {string} path - E.g. "/users"
 * @property {string} token
 * @property {object} data
 * 
 * @returns {Promise<object>}
 * @property {number} response.status
 * @property {object} response.data
 */
export async function put(payload) {
  try {
    return axios({
      method: 'put',
      url: `${process.env.API_ENDPOINT}${payload.path}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${payload.token}`,
      },
      data: payload.data,
    });
  } catch (error) {
    throw error;
  }
}

/**
 * @param {object} payload 
 * @property {string} path - E.g. "/users"
 * @property {string} token
 * @property {object} data
 * 
 * @returns {Promise<object>}
 * @property {number} response.status
 * @property {object} response.data
 */
export async function patch(payload) {
  try {
    return axios({
      method: 'patch',
      url: `${process.env.API_ENDPOINT}${payload.path}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${payload.token}`,
      },
      data: payload.data,
    });
  } catch (error) {
    throw error;
  }
}

/**
 * @param {object} payload 
 * @property {string} path - E.g. "/users"
 * @property {string} token
 * 
 * @returns {Promise<object>}
 * @property {number} response.status
 * @property {object} response.data
 */
export async function del(payload) {
  try {
    return axios({
      method: 'delete',
      url: `${process.env.API_ENDPOINT}${payload.path}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${payload.token}`,
      },
    });
  } catch (error) {
    throw error;
  }
}
