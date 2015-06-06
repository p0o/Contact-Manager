var React = require('react');
var CMActions = require('../actions/CMActions');

var ContactModal = React.createClass({
	render:function() {
		return(
			<div id="contact_modal" className="modal">
				<form id="contact_form" onSubmit={this._saveContact}>
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
							<input id="contact_email" type="email" className="validate"/>
							<label for="icon_email">Email</label>
						</div>
					</div>
					<input type="submit" className="hidden-btn"/>
				</form>

				<div className="modal-footer">
					<a onClick={this._saveContact} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
				</div>
			</div>
		);
	},
	// sending new contact to action
	_saveContact: function(e) {
		e.preventDefault();
		var newContact = {};
		var form = $('#contact_form');
		
		// getting data from form
		newContact.name = form.find('#contact_name').val();
		newContact.phone = form.find('#contact_phone').val();
		newContact.email = form.find('#contact_email').val();

		CMActions.create(newContact);
		
		this._clearContactForm();
	},
	/*
	 * clearing form for next time
	 */
	_clearContactForm: function() {
		var form = $('#contact_form');

		form.find('#contact_name').val('');
		form.find('#contact_phone').val('');
		form.find('#contact_email').val('');
		$('#contact_modal').closeModal();
	}
});

module.exports = ContactModal;