import { constants } from 'config/constants';

class CommunityLeaderService {
  constructor($http) {
    this.$http = $http;
  }

  getAll()  {
    return this.$http.get(constants.APIEndpoints.COMMUNITY_LEADERS)
      // Successful signup
      .then(({ data }) => {
        return data;
      })
      // Failed signup
      .catch((response) => {
        console.log(response);
      });
  }

  create({ email, cities }) {
    return this.$http.post(
      constants.APIEndpoints.COMMUNITY_LEADERS,
      {
        community_leader: {
          email,
          cities: cities.join(',')
        }
      }
    ).then(({ data }) => data);
  }
}

CommunityLeaderService.$inject = ['$http'];

export default CommunityLeaderService;