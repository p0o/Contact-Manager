
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CMConstants = require('../constants/CMConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _editContact = {};

// saving new contact
function create(newContact) {
  var id = Math.round(Math.random() * 9999999);
  _contacts[id] = {
    id: id,
    name: newContact.name,
    phone: newContact.phone,
    email: newContact.email,
    avatar: newContact.avatar
  };
}

// sending edit id to controller view
function edit(contact) {
  _editContact = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar
  };
}

// saving edited contact
function save(contact) {
  _contacts[contact.id] = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar
  };
}


var CMStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire Contacts.
   * @return {object}
   */
  getEditContact: function() {
    return _editContact;
  },
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

    case CMConstants.CM_EDIT:
      edit(action);
      CMStore.emitChange();
      break;

    case CMConstants.CM_SAVE:
      save(action);
      CMStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CMStore;