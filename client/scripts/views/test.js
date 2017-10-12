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

    events: {
      'select2:select #group': 'getSelectedInfo'
    },

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
          { data: 'name' },
          { data: 'code' }
        ],
        orderBy: 1,
        text: 'name',
        id: 'code'
      };

      var selectModule = Select2Module;

      selectModule.prependString = 'code';

      selectModule.loadData(select2Options);
    },

    getSelectedInfo: function () {
      var group = $('#group').select2('data')[0];

      if(group !== undefined) {
        var info = 'Id: ' + group.id;
        $('#selected-group-info').text(info);
      }
    }

  });

  return TestView;

});