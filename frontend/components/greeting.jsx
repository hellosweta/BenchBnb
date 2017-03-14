import React from 'react';
import Link from 'react-router';
// If the user is logged in, then the Greeting should contain:
//
// A welcome message including the user's username
// A button to logout
// If the user is not logged in, then the Greeting should contain:
//
// A <Link to> /#/signup
// A <Link to> /#/login

const Greeting = (props) => {
  let content = "";
  if (props.currentUser) {

      return (<div>
        <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>

      </div>);
    // content = <h3>Hi, {props.currentUser.username}!</h3>
  } else {
     return (<div>
       <h2 className="header-name">Hi, {props.currentUser}!</h2>
       <button className="header-button" onClick={props.logout}>Log Out</button>

    </div>);
  }
  // let content = props.currentUser;

//   if (props.currentUser) {
//     content = (
//       <h3>`${props.currentUser} hi!`</h3>
//       // <button onClick={props.logout}>LogOut</button>
//     );
//   } else {
//     content =8
//     (
//       <Link to='/#/signup'></Link>
//   // <Link to='/#/login'></Link>
// );
//   }

  // return {content};

};

export default Greeting;
