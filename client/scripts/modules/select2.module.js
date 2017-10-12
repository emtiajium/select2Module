/**
 * Created by emtiaj on 10/12/17.
 */

define([
  'select2'
], function () {
  'use strict';

  var Select2Module = {

    appendData: {},

    filterObject: {},

    prependString: null, // prepend data with placeholder

    loadData: function (listObject) {

      var self = this;

      $(listObject.dropDownSelector).empty();

      $(listObject.dropDownSelector).select2({
        placeholder: listObject.placeholder,
        allowClear: true,
        minimumInputLength: 0,
        width: '100%',

        ajax: {
          url: listObject.url,
          method: listObject.method,
          data: function (params) {
            var temporaryObject = {
              search: {value: params.term},
              columns: listObject.columns,
              filterObject: self.filterObject,
              order: [{ column: listObject.orderBy, dir: 'asc' }],
              start: (((params.page ? params.page: 1) -1) * 10),
              length: 10
            };
            return JSON.stringify(temporaryObject);
          },
          dataType: 'json',
          contentType: 'application/json',
          cache: false,
          delay: 250,
          processResults: function (response, params) {

            var receivedData = [];
            var prependData = undefined;
            var text = '';

            _.each(response.data, function (eachData) {
              if(self.prependString) {
                prependData = eachData[self.prependString];
                text = '[' + prependData + '] ';
              }
              receivedData.push({
                id: eachData[listObject.id],
                text: text + eachData[listObject.text]
              });
            });

            if(self.appendData) {
              receivedData.push(self.appendData);
            }

            return {
              results: receivedData,
              pagination: {
                more: ((params.page ? params.page : 1) * 10) < response.totalData
              }
            };
          }
        }
      });
    },

    /**
     * no ajax call
     * just one data, array
     * @param listObject
     */

    loadPreviouslySelectedData: function (listObject) {
      $(listObject.dropDownSelector).empty();
      $(listObject.dropDownSelector).select2({
        width: '100%',
        allowClear: true,
        placeholder: listObject.text,
        data: [{id: listObject.id, text: listObject.text}]
      });
    },

    /**
     * array of object
     * without loading in template
     * @param listObject
     */

    loadFewData: function (listObject) {
      $(listObject.dropDownSelector).empty();
      $(listObject.dropDownSelector).select2({
        width: '100%',
        allowClear: false,
        data: listObject.data
      });
    }

  };

  return Select2Module;

});
