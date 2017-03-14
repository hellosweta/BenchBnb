export const signup = (user) => (
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

export const login = (user) => (
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

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: `api/session`,
  })
);
