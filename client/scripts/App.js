/**
 * Created by emtiaj on 10/12/17.
 */

define([
  'Router'
], function (Router) {

  var initialize = function () {
    runApplication();
  };

  var runApplication = function () {

    app.Router = Router;

    var hash = 'home';

    // load the same page if window is reloaded

    if(window.location.hash) {
      hash = window.location.hash.substr(1, window.location.hash.length);
    }
    window.location.hash = hash;

    Backbone.history.start();

  };

  /**
   * return the object with initialize method
   */

  return {
    initialize: initialize
  };

});
