class AuthStore {
  constructor() {
  }

  setAuthToken(token) {
    localStorage.setItem('ZBaccessToken', token);
  }

  authToken() {
    return localStorage.getItem('ZBaccessToken');
  }
}

export default AuthStore;