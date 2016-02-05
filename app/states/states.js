import angular              from 'angular';
import { HomeController }   from 'states/home/home';
import { SearchController } from 'states/search/search';

export default angular.module('ZikaronBasalonFrontendAngular.controllers', [])
  .controller('HomeController', HomeController)
  .controller('SearchController', SearchController);
