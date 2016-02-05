//import { constants } from 'config/constants';
//
//class AuthService {
//  constructor($http) {
//    this.$http = $http;
//  }
//
//  signUp(email, password, password_confirmation) {
//    this.$http.post(
//      constants.APIEndpoints.USERS,
//      { user: { email, password, password_confirmation } }
//    ).then((response) => {
//      //console.log(response);
//    }).catch((response) => {
//    //  console.log(response);
//    });
//  }
//
//  signIn(email, password) {
//    this.$http.post(
//        constants.APIEndpoints.LOGIN,
//        { email, password }
//    ).then((response) => {
//    //  console.log(response);
//    }).catch((response) => {
//    //  console.log(response);
//    });
//  }
//}
//
//AuthService.$inject = ['$http'];
//
//export default AuthService;