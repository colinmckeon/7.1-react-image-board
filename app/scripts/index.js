var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Form = require('./components/form.jsx').AppComponent;
// var Listing = require('./components/listing.jsx').ListingComponent;
// var Appcomp = require('./components/app.jsx').AppComponent;

//WAITS FOR DOM TO BE READY
$(function(){

  // Backbone.history.start();

  ReactDOM.render(
    React.createElement(Form),
    document.getElementById('app')
  );

});
