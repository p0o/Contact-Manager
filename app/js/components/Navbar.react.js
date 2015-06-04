var React = require('react');
var CMActions = require('../actions/CMActions');

var Navbar = React.createClass({
	render:function() {
		return(
			<nav><a onClick={this._addNewContact}>Add</a></nav>
		);
	},
	_addNewContact: function() {
		CMActions.create('Pooria');
	}
});

module.exports = Navbar;