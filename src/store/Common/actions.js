import { Action, Mutation } from './types';

/**
 * @typedef {function} VuexAction
 * @type {object}
 */
export default {
  /**
   * @name setUserEmail
   * @param {function} [commit]
   * @param {string} email
   */
  [Action.SET_USER_EMAIL] ({ commit }, email) {
    commit(Mutation.SET_USER_EMAIL, email);
  }
};
