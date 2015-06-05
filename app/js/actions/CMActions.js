
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CMConstants = require('../constants/CMConstants');

var CMActions = {

  /**
   * @param {string} new contact object
   */
  create: function(newContact) {
  	// adding avatar randomly!
	var avatar = 'img/faces/' + Math.floor(Math.random() * (15-1) + 1) + '.jpg';
	newContact.avatar = avatar;

    AppDispatcher.dispatch({
      actionType: CMConstants.CM_CREATE,
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      avatar: newContact.avatar
    });
  }

};

module.exports = CMActions;
