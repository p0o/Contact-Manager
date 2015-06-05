var React = require('react');
var CMActions = require('../actions/CMActions');

var EditContactModal = React.createClass({

	render:function() {
		return(
			<div id="edit_contact_modal" className="modal">
				<form id="edit_contact_form" onSubmit={this._saveContact}>
				    <div className="modal-content">
				    	<h4>Edit Contact</h4>
					    <div className="input-field">
						    <i className="mdi-action-account-circle prefix"></i>
						    <input id="contact_name" type="text" className="validate" />

					    </div>
					    <div className="input-field">
					        <i className="mdi-communication-phone prefix"></i>
					        <input id="contact_phone" type="tel" className="validate"/>

				        </div>
				        <div className="input-field">
					        <i className="mdi-communication-email prefix"></i>
					        <input id="contact_email" type="tel" className="validate"/>

				        </div>
				    </div>
				    <input id="contact_id" type="hidden" />
				    <input id="contact_avatar" type="hidden" />
				    <input type="submit" className="hidden-btn"/>
				</form>
				    
			    <div className="modal-footer">
			      <a onClick={this._saveContact} className="modal-action modal-close waves-effect waves-green btn-flat">Press enter or click here</a>
			    </div>
			</div>
		);
		
	},
	// saving contact
	_saveContact: function(e) {
		e.preventDefault();
		var editId = this.props.editContact.id;
		var contact = {};
		var form = $('#edit_contact_form');
		
		// getting data from form
		contact.id = form.find('#contact_id').val();
		contact.avatar = form.find('#contact_avatar').val();
		contact.name = form.find('#contact_name').val();
		contact.phone = form.find('#contact_phone').val();
		contact.email = form.find('#contact_email').val();


		//sending to action 
		CMActions.save(contact);

		$('#edit_contact_modal').closeModal();
		this._clearContactForm();
	},
	/*
	 * clearing form for next time
	 */
	_clearContactForm: function() {
		var form = $('#edit_contact_form');

		form.find('#contact_name').val('');
		form.find('#contact_phone').val('');
		form.find('#contact_email').val('');
	}
});

module.exports = EditContactModal;