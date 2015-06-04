
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CMConstants = require('../constants/CMConstants');

var CMActions = {

  /**
   * @param {string}
   */
  create: function(name) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_CREATE,
      name: name
    });
  }

};

module.exports = CMActions;
