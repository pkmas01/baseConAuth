const loginUser = async ({ username, password }) => fetch(process.env.REACT_APP_OAUTH_URL, {
  method: 'post',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: process.env.REACT_APP_PASSWORD_GRANT_TYPE,
    client_id: process.env.REACT_APP_CREDENTIALS_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    scope: process.env.REACT_APP_SCOPE,
    username,
    password,
  }),
}).then(response => response.json())
  .then(res => res).catch((error) => {
    throw error;
  });

export default loginUser;
