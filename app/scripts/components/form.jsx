var React = require('react');


var ImageForm = React.createClass({
  componentWillMount: function(){

    this.showForm = false;
  },
  handleClick: function(e){
    e.preventDefault();
  }
});
