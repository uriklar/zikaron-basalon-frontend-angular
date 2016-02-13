import { constants } from 'config/constants';

class CommunityLeaderService {
  constructor($http) {
    this.$http = $http;
  }

  getAll()  {
    return this.$http.get(constants.APIEndpoints.COMMUNITY_LEADERS);
  }

  get(id) {
    return this.$http.get(`${constants.APIEndpoints.COMMUNITY_LEADERS}/${id}`);
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
    )
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject(response);
      }

      return response;
    });
  }

  update({ email, cities, id }) {
    return this.$http.put(
      `${constants.APIEndpoints.COMMUNITY_LEADERS}/${id}`,
      {
        community_leader: {
          id,
          email,
          cities: cities.join(',')
        }
      }
      )
      .then((response) => {
        if (response.status >= 400) {
          return Promise.reject(response);
        }

        return response;
      });
  }
}

CommunityLeaderService.$inject = ['$http'];

export default CommunityLeaderService;