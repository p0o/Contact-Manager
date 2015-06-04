var React = require('react');

var Navbar = React.createClass({
	render:function() {
		return(
			<nav><a onClick="_addNewContact()">Add</a></nav>
		);
	},
	_addNewContact: function() {
		alert('Adding new contact!');
	}
});

module.exports = Navbar;