/**
* Contact Manager experimental app with Flux architecture - React
* Developed by Pooria Atarzadeh - @p0zart
*
* This project is using browserify to handle module requirements 
*/
var React = require('react');

var CMApp = require('./components/CMApp.react');


React.render(
  <CMApp />,
  document.getElementById('cm-holder')
);
