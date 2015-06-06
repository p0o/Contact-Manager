var React = require('react');
var CMActions = require('../actions/CMActions');

var Contact = React.createClass({
	render:function() {
		var contact = this.props.contact;

		// contact component ( for every contacts )
		// used by ContactList.react.js
		return(
			<li className="collection-item avatar">
			<img src={contact.avatar} className="circle" />
			<span className="title">{contact.name}</span>
			<p>Phone Number: {contact.phone} <br />
			Email: {contact.email}
			</p>
			<a href="#" onClick={this._openEditModal} className="secondary-content"><i className="mdi-editor-mode-edit"></i></a>
			</li>
		);
	},
	_openEditModal: function() {
		var contact = this.props.contact;
		CMActions.edit(contact);
	}
});

module.exports = Contact;