class AuthStore {
  constructor() {
  }

  setAuthToken(token) {
    localStorage.setItem('ZBaccessToken', token);
  }

  authToken() {
    localStorage.getItem('ZBaccessToken');
  }
}

export default AuthStore;