/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var React = require('react');
var Navbar = require('./Navbar.react');
var ContactList = require('./ContactList.react');
var CMStore = require('../stores/CMStore');

/**
 * Retrieve the current Contacts data from the CMStore
 */
function getContactsState() {
  return {
    allContacts: CMStore.getAll()
  };
}

var CMApp = React.createClass({
	getInitialState: function() {
    	return getContactsState();
  	},
  	componentDidMount: function() {
		CMStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		CMStore.removeChangeListener(this._onChange);
	},
	render: function() {
		return(
			<div>
			  Contact Holder
			  <Navbar/>
			  <ContactList data={this.state.allContacts}/>
			</div>
		);
	},
	/**
	* Event handler for 'change' events coming from the TodoStore
	*/
	_onChange: function() {
		this.setState(getContactsState());
	}
});

module.exports = CMApp;