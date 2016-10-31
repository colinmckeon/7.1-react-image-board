var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./components/form.jsx').AppComponent;
// var Listing = require('./components/listing.jsx').ListingComponent;
// var Appcomp = require('./components/app.jsx').AppComponent;

//WAITS FOR DOM TO BE READY
$(function(){

  ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
  );

});
