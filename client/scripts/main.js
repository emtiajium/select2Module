/**
 * Created by emtiaj on 10/12/17.
 */

'use strict';

var app = {};

require.config({

  // set the paths

  paths: {
    templates: '../templates',
    modules:'modules',
    text:  '../bower_components/requirejs-text/text',
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    tether : '../bower_components/tether/dist/js/tether',
    modernizer: '../bower_components/modernizr/modernizr',
    jqueryUI: '../bower_components/jquery-ui/jquery-ui.min',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    select2 : '../bower_components/select2/dist/js/select2',

    Router: 'routes/router'
  },

  // define the dependencies

  shim: {
    'backbone': ['underscore', 'jquery'],
    'bootstrap': ['jquery'],
    'jqueryUI': ['jquery'],
    'App': ['backbone', 'jqueryUI']
  }
});


require([
  'App'
],
function (App) {
  App.initialize(); // initialize
});
