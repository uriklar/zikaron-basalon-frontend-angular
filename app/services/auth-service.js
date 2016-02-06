import { constants } from 'config/constants';

class AuthService {
  constructor($http) {
    this.$http = $http;
  }

  _setAuthToken(token) {
    localStorage.setItem('ZBaccessToken', token);
  }

  _authToken() {
    localStorage.getItem('ZBaccessToken');
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
    .then(({ data }) => {
      if (data.access_token) {
        this._setAuthToken(data.access_token);
      }
    })
    // Failed signup
    .catch((response) => {
      console.log(response);
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

AuthService.$inject = ['$http'];

export default AuthService;