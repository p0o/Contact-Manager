var React = require('react');

var Contact = React.createClass({
	render:function() {
		var contact = this.props.contact;

		// contact component ( for every contacts )
		// used by ContactList.react.js
		return(
			<li className="collection-item avatar">
			<img src={contact.avatar}  className="circle" />
		    <span className="title">{contact.name}</span>
		    <p>Phone Number: {contact.phone} <br />
		    Email: {contact.email}
		    </p>
		    <a onClick={this._editContact} className="secondary-content"><i className="mdi-editor-mode-edit"></i></a>
			</li>
		);
	},
	_editContact: function() {
		alert(this.props.contact.id);
	}
});

module.exports = Contact;