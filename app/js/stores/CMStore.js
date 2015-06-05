
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CMConstants = require('../constants/CMConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _contacts = {};

function create(newContact) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = Math.round(Math.random() * 9999999);
  _contacts[id] = {
    id: id,
    name: newContact.name,
    phone: newContact.phone,
    email: newContact.email
  };
}



var CMStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _contacts;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case CMConstants.CM_CREATE:
    text = action.name.trim();
      if (text !== '') {
        create(action);
        CMStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = CMStore;