export class CommunityLeaderIndexController {

  // @ngInject
  constructor(communityLeaderService, $state) {
    this.communityLeaderService = communityLeaderService;
    this.$state = $state;

    this.communityLeaderService.getAll().then(({ data }) => {
      this.leaders = data.community_leaders;
    });
  }

  getCities(leader) {
    return leader.cities.map((city) => city.name).join(' | ');
  }

  isSignedUp(leader) {
    return leader.user
      ? 'כן'
      : 'לא';
  }

  editLeader(leader) {
    console.log(leader);
    this.$state.go('edit-community-leader', { leaderId: leader.id });
  }
}

CommunityLeaderIndexController.$inject = ['communityLeaderService', '$state'];