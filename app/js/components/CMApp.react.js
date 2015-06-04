/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var React = require('react');
var Navbar = require('./Navbar.react');
var ContactList = require('./ContactList.react');
var CMStore = require('../stores/CMStore');

var CMApp = React.createClass({
	render: function() {
		return(
			<div>
			  Contact Holder
			  <Navbar />
			  <ContactList />
			</div>
		);
	}
});

module.exports = CMApp;