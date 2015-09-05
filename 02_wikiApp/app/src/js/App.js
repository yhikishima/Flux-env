// App.js
var React = require('react');
var flux = require('flux-react');
var view = require('./components/view.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Wikipedia Search!</h1>
        <view/>
      </div>
    );
  }
});

React.render(<App/>, document.body);