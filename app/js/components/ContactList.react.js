var React = require('react');

var ContactList = React.createClass({
	render:function() {
		var contacts=[];

		for (contact in this.props.data) {
			contacts.push(
				<li className="collection-item avatar">
				<img src="img/faces/1.jpg"  className="circle" />
			    <span className="title">{this.props.data[contact].name}</span>
			    <p>Phone Number: {this.props.data[contact].phone} <br />
			    Email: {this.props.data[contact].email}
			    </p>
				</li>);
		}
		return(<ul>{contacts}</ul>);
	}
});

module.exports = ContactList;