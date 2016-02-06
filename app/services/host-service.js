import { constants } from 'config/constants';

class HostService {
  constructor($http) {
    this.$http = $http;
  }

  getAll()  {
    return this.$http.get(constants.APIEndpoints.HOSTS)
      // Successful signup
      .then(({ data }) => {
        return data;
      })
      // Failed signup
      .catch((response) => {
        console.log(response);
      });
  }
}

HostService.$inject = ['$http'];

export default HostService;