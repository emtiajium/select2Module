/**
 * Created by emtiaj on 10/12/17.
 */

var GroupModel = require('../models/groups.model');

var getGroups = function (req, res) {
  GroupModel.getGroups()
    .then(function (groupData) {
      res.send(groupData);
    })
    .catch(function (err) {
      res.status(400).send({message: 'Error getting group data'});
    });
};

module.exports.getGroups = getGroups;