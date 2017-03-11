export const signUp = (user) => (
  $.ajax({
    method: 'POST',
    url: `api/users`,
    data: { user }
    // data: {
    //   user: {
    //     username: username,
    //     password: password WHY not this

    //   }
    // }
  })
);

export const logIn = (user) => (
  $.ajax({
    method: 'POST',
    url: `api/session`,
    data: { user }
    // data: {
    //   user: {
    //     username: username,
    //     password: password
    //   }
    // }
  })
);

export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: `api/session`,
  })
);
