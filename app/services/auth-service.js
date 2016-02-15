import { constants } from 'config/constants';

class AuthService {
  constructor($http, authStore, $rootScope  ) {
    this.$http = $http;
    this._authStore = authStore;
    this._$rootScope = $rootScope;

  }

  signedIn() {

    var token = this._authStore.authToken();// localStorage.getItem('ZBaccessToken');
    if (token)
    {
      this._$rootScope.isSignedIn = true;
    }
    else {
      this._$rootScope.isSignedIn = false;
    }

    return token;
  }

  signOut(){
    this._authStore.setAuthToken(null);
    this._$rootScope.isSignedIn = false;
  }

  signUp(email, password, password_confirmation)  {
    return this.$http.post(
      constants.APIEndpoints.USERS,
      { user: { email, password, password_confirmation } }
    )
    // Successful signup
    .then(({ data }) => {
      if (data.access_token) {
        this._authStore.setAuthToken(data.access_token);
      }
    })
    // Failed signup
    .catch((response) => {
      console.log(response);
    });
  }

  signIn(email, password) {
   var promise =  this.$http.post(
        constants.APIEndpoints.LOGIN,
        { email, password }
    ).then((response) => {
    //  console.log(response);
    }).catch((response) => {
    //  console.log(response);
    });

    return promise;
  }
}

AuthService.$inject = ['$http', 'authStore','$rootScope'];

export default AuthService;