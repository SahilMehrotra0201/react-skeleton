var React = require('react');
var ListItem = React.createClass({
      render : function() {
          return (
              <li>
                <h2>
                  {this.props.data}
                </h2>
              </li>
          );
      }
});

module.exports = ListItem;
