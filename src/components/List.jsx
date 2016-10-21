var React = require('react');
var ListItem = require('./ListItem.jsx');

var data = [{"id":1, "text":"sahil"},{"id":2, "text":"aman"}];

var List = React.createClass({
      render : function() {
        var listItems = data.map(function(item) {
          return <ListItem key={item.id} data={item.text}></ListItem>
        });
        return (<ul>{listItems}</ul>);
      }
});

module.exports = List;
