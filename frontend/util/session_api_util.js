export const signUp = (username, password) => (
  $.ajax({
    method: 'POST',
    url: `api/users`,
    data: {
      user: {
        username: username,
        password: password
      }
    }
  })
);

export const signIn = (username, password) => (
  $.ajax({
    method: 'POST',
    url: `api/session`,
    data: {
      user: {
        username: username,
        password: password
      }
    }
  })
);

export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: `api/session`,
  })
);
