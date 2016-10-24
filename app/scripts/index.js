var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var form = require('./components/form.jsx');

//WAITS FOR DOM TO BE READY
$(function(){

  Backbone.history.start();

  ReactDOM.render(
    React.createElement(form),
    document.getElementById('app')
  );

});
