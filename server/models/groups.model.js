/**
 * Created by emtiaj on 10/12/17.
 */

var getGroups = function (groupData) {
  var filteredData = {
    totalData: 2,
    data: [
      {
        _id: '59ca2c270176f03880348e7d',
        name: 'Salt',
        code: '12'
      },
      {
        _id: '59ca2c270176f03880348e7e',
        name: 'Rice',
        code: '13'
      }
    ]
  };
  return new Promise(function (fulfill, reject) {
    fulfill(filteredData);
  });
};

module.exports.getGroups = getGroups;