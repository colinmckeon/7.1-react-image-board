var ImagesCollection = require('../models/model.js').ImagesCollection;
var React = require('react');
var Backbone = require('backbone');
var form = require('./form.jsx').ImageForm;
var listing = require('./listing.jsx').ListingComponent;

var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImagesCollection();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      collection: imageBoard
    };
  },
  render: function(){
    var imageList = this.state.collection.map(function(image){
      return <ListingComponent key={image.get("_id")} model={image} />
    });

    return(

    );
  }
});

module.exports = {
  AppComponent: AppComponent
}
