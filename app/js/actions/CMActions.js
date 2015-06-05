
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CMConstants = require('../constants/CMConstants');

var CMActions = {

  /**
   * @param {string}
   */
  create: function(newContact) {
    AppDispatcher.dispatch({
      actionType: CMConstants.CM_CREATE,
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email
    });
  }

};

module.exports = CMActions;
