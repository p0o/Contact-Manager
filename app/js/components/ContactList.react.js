var React = require('react');

var ContactList = React.createClass({
	render:function() {
		var contacts=[];

		for (contact in this.props.data) {
			contacts.push(<li>{this.props.data[contact].name}</li>);
		}
		return(
			<ul>{contacts}</ul>
		);
	}
});

module.exports = ContactList;