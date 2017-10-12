/**
 * Created by emtiaj on 10/12/17.
 */

var GroupController = require('../controllers/groups.controller');

module.exports = function (app) {
  app.post('/get_groups', GroupController.getGroups);
};