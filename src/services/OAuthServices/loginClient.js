const loginClient = async () => fetch(process.env.REACT_APP_OAUTH_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    grant_type: process.env.REACT_APP_CREDENTIALS_GRANT_TYPE,
    client_id: process.env.REACT_APP_CREDENTIALS_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    scope: process.env.REACT_APP_SCOPE,
  }),
}).then(response => response.json())
  .then(res => res).catch((error) => {
    throw error;
  });

export default loginClient;
