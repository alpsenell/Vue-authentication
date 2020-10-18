import Vue from 'vue';
import { Mutation } from './types';

export default {
  /**
   * @name setUserEmail
   * @param {object} state
   * @param {string} email
   */
  [Mutation.SET_USER_EMAIL] (state, email) {
    state.userEmail = email;
  },
  /**
   * @name setPasswordError
   * @param {object} state
   * @param {boolean} isErrorExist
   */
  [Mutation.SET_PASSWORD_ERROR] (state, isErrorExist) {
    Vue.set(state.inputErrors, 'password', isErrorExist);
  },
  /**
   * @name setEmailError
   * @param {object} state
   * @param {boolean} isErrorExist
   */
  [Mutation.SET_EMAIL_ERROR] (state, isErrorExist) {
    Vue.set(state.inputErrors, 'email', isErrorExist);
  }
};
