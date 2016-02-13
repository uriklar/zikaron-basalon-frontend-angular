import angular                               from 'angular';
//import { HomeController }   from 'states/home/home';
import { SearchController }                  from 'states/search/search';
import { DashboardController }               from 'states/dashboard/dashboard';
import {HostSignupController }               from 'states/host-signup/host-signup';
import {PrevHostedAndOrganizationController} from 'states/host-organization-prevhosting/hostedAndOrganization';
import {RegisterController}                  from 'states/register/register';
import {HostLoginController}                 from 'states/host-login/HostLoginController';
import {SessionDetailsController}            from 'states/session-details/sessionDetails';
import { CommunityLeaderIndexController }    from 'states/admin/community-leader-index.js';
import { CreateCommunityLeaderController }   from 'states/admin/create-community-leader';

export default angular.module('ZikaronBasalonFrontendAngular.controllers', [])
//  .controller('HomeController', HomeController)
  .controller('SearchController', SearchController)
  .controller('DashboardController', DashboardController)
  .controller('HostSignupController', HostSignupController)
  .controller('RegisterController', RegisterController)
 // .controller('HostedAndOrganizationController', HostedAndOrganizationController)
    .controller('PrevHostedAndOrganizationController', PrevHostedAndOrganizationController)
.controller('SessionDetailsController', SessionDetailsController)
  .controller('CreateCommunityLeaderController', CreateCommunityLeaderController)
  .controller('CommunityLeaderIndexController', CommunityLeaderIndexController)

;
