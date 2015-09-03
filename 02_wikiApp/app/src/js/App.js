// App.js
var React = require('flux-react');
var view = require('./components/view.js');

React.debug();

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

React.renderComponent(<App/>, document.body);