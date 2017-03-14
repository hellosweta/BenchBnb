// RECEIVE_CURRENT_USER - sets currentUser to the action's user and clears errors
// RECEIVE_ERRORS - sets errors to the action's errors and clears the currentUser
// Your SessionReducer should maintain its own default state. To do that pass in an object as a default argument to SessionReducer with currentUser set to null and errors set to an empty array.

// Remember to use both Object.freeze() and Object.assign or lodash/merge to prevent the state from being accidentally mutated.

// import { login, signUp, signIn } from '../actions/session_actions.js'
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions.js';
import merge from 'lodash/merge';

export default (state = {currentUser: null, errors: []}, action)  => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser, errors:[]});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {currentUser: null, errors: errors});
    default:
      return state;
  }
};
