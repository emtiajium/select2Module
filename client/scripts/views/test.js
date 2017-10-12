/**
 * Created by emtiaj on 10/12/17.
 */

define([
  'text!templates/test.html',
  'modules/select2.module'
], function (TestTemplate, Select2Module) {
  'use strict';

  var TestView = Backbone.View.extend({

    el: '#page-content',

    template: _.template(TestTemplate),

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {},

    render: function () {
      this.$el.html(this.template());

      this.getGroup();
    },

    getGroup: function () {
      var select2Options = {
        dropDownId: '#group',
        placeholder: 'Select a product group',
        url: '/get_groups',
        method: 'POST',
        columns: [
          { data: '_id' },
          { data: 'name' }
        ],
        orderBy: 1,
        shownValue: 'name'
      };

      Select2Module.loadData(select2Options);
    }

  });

  return TestView;

});