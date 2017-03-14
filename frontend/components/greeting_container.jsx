import React from 'react-redux';
import { connect } from 'react-redux';
import Greeting from './greeting.jsx';
import { logout } from '../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
