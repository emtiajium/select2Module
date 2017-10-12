/**
 * Created by emtiaj on 10/12/17.
 */

define([
  'views/test'
], function (TestView) {

  'use strict';

  var Router = Backbone.Router.extend({

    currentView: null,

    routes: {
      home: 'home'
    },

    /**
     * renders the current view and closes the existing one
     * @param view, the view instance
     * @param isRender, true/false
     */

    changeView: function (view, isRender) {

      if(this.currentView !== null) {
        this.currentView.close();
      }

      this.currentView = view;

      if(isRender) {
        this.currentView.render();
      }
    },

    home: function () {
      this.changeView(new TestView(), true);
    }
  });

  return new Router();
});
