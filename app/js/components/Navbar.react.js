var React = require('react');
var CMActions = require('../actions/CMActions');

/*
 * Show Add button and Program header
 */
var Navbar = React.createClass({
	render:function() {
		return(
			<li className="collection-header">
				<span className="title flow-text">Contact Manager</span>
				<a onClick={this._openAddModal} className="teal darken-1 waves-effect waves-circle waves-light btn-floating secondary-content">
					<i className="mdi-content-add"></i>
				</a>
			</li>
		);
	},

	// Opening AddContactModal component
	_openAddModal: function() {
		$('#contact_modal').openModal();
		// focus on the first field
		$('#contact_modal').find('#contact_name').focus();
	}
});

module.exports = Navbar;