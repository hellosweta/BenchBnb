// Before we get to the reducer, let's write and export the following action creators in a new file actions/session_actions.js:
//
// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)
// Don't forget to define and export the corresponding action types as well (e.g., export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER').
//
// logout won't accept an argument. receiveErrors will take an array. All other action creators accept a user object. On logout success dispatch receiveCurrentUser(null) to remove the current user.
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/ession_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = (user) => (dispatch) => ({
  
})

export const login = (user) => (
  type: RECEIVE_CURRENT_USER,

)


// signup: should make an AJAX request that creates a new user.
// login: should make an AJAX request that creates a new session.
// logout: should make an AJAX request that deletes the current session.
