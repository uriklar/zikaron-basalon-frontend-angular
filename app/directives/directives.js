import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('ZikaronBasalonFrontendAngular.directives', [])
  .directive('ifEnv', ifEnv);
