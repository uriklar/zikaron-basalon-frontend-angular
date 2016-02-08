import { constants } from 'config/constants';

class AuthService {
  constructor($http, authStore) {
    this.$http = $http;
    this._authStore = authStore;
  }

  signedIn() {
    return localStorage.getItem('ZBaccessToken');
  }

  signUp(email, password, password_confirmation)  {
    return this.$http.post(
      constants.APIEndpoints.USERS,
      { user: { email, password, password_confirmation } }
    )
    // Successful signup
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject(response);
      }

      if (response.data.access_token) {
        this._authStore.setAuthToken(response.data.access_token);
      }

      return response;
    });
  }

  signIn(email, password) {
    this.$http.post(
        constants.APIEndpoints.LOGIN,
        { email, password }
    ).then((response) => {
    //  console.log(response);
    }).catch((response) => {
    //  console.log(response);
    });
  }
}

AuthService.$inject = ['$http', 'authStore'];

export default AuthService;