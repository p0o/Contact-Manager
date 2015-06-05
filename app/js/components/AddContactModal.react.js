var React = require('react');
var CMActions = require('../actions/CMActions');

var AddContactModal = React.createClass({
	render:function() {
		return(
			<div id="add_contact_modal" className="modal">
				<form id="add_contact_form" onSubmit={this._addNewContact}>
				    <div className="modal-content">
				    	<h4>Add New Contact</h4>
					    <div className="input-field">
						    <i className="mdi-action-account-circle prefix"></i>
						    <input id="contact_name" type="text" className="validate" />
						    <label for="icon_prefix">Name</label>
					    </div>
					    <div className="input-field">
					        <i className="mdi-communication-phone prefix"></i>
					        <input id="contact_phone" type="tel" className="validate"/>
					        <label for="icon_telephone">Phone</label>
				        </div>
				        <div className="input-field">
					        <i className="mdi-communication-email prefix"></i>
					        <input id="contact_email" type="tel" className="validate"/>
					        <label for="icon_email">Email</label>
				        </div>
				    </div>
				    <input type="submit" className="hidden-btn"/>
				</form>
				    
			    <div className="modal-footer">
			      <a href="#!" onClick={this._addNewContact} className="modal-action modal-close waves-effect waves-green btn-flat">Add</a>
			    </div>
			</div>
		);
	},
	// sending new contact to action
	_addNewContact: function(e) {
		e.preventDefault();
		var newContact = {};
		var form = $('#add_contact_form');
		newContact.name = form.find('#contact_name').val();
		newContact.phone = form.find('#contact_phone').val();
		newContact.email = form.find('#contact_email').val();
		CMActions.create(newContact);
		$('#add_contact_modal').closeModal();
	}
});

module.exports = AddContactModal;



