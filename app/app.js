/* globals __dirname */

import angular from 'angular';
import 'angular-simple-logger/dist/angular-simple-logger';
import 'angular-google-maps/dist/angular-google-maps.min';
import _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'assets/stylesheets/application.scss';

import Models           from 'models/models';
import Services         from 'services/services';
import Directives       from 'directives/directives';
import Components       from 'components/components';
import Filters          from 'filters/filters';
import Config           from 'config/config';
import Routes           from 'config/routes/routes';
import States           from 'states/states';
import RegisterComponent from 'components/registerComponent';

// Import all html files to put them in $templateCache
// If you need to use lazy loading, you will probably need
// to remove these two lines and explicitly require htmls
const templates = require.context(__dirname, true, /\.html$/);

templates.keys().forEach(templates);

angular.module('ZikaronBasalonFrontendAngular', [
  'nemLogging',
  'uiGmapgoogle-maps',
  Models.name,
  Services.name,
  Directives.name,
  Components.name,
  Filters.name,
  Config.name,
  Routes.name,
  States.name,
  RegisterComponent.name
]);

angular.element(document).ready(() =>
  angular.bootstrap(document, ['ZikaronBasalonFrontendAngular'], {
    strictDi: true
  }));
