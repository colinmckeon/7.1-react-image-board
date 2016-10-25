var React = require('react');
var Backbone = require('backbone');
var Listing = require('./listing.jsx').ListingComponent;
var ImagesCollection = require('../models/model.js').ImagesCollection;
var Images = require('../models/model.js').Images;


var ActualForm = React.createClass({
  getInitialState: function(){
    return {
      url: this.props.model.get('url'),
      caption: this.props.model.get('caption')
    };
  },
  handleSubmit: function(event){
    event.preventDefault();
    var newImage = {url: this.state.url, caption: this.state.caption};
      console.log(newImage);

    // this.props.collection.create(newImage);
    this.setState({url: '', caption: ''});
    this.props.handleSubmit(newImage);// pushes the input up to the app
  },
  handleUrlChange: function(event){
    event.preventDefault();

    this.setState({
      url: event.target.value
    })
  },
  handleCaptionChange: function(event){
    event.preventDefault();

    this.setState({
      caption: event.target.value
    })
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit} id="edit-form">
        <input onChange={this.handleUrlChange} id="image-url" className="form-control" type="text" name="url" placeholder="Image URL" value={this.state.url}/>
        <br/>
        <textarea onChange={this.handleCaptionChange} id="image-caption" className="form-control" type="text" name="caption" placeholder="Image Caption" rows="4" value={this.state.caption}/>
        <br/>
        <div className="dos-btns">
          <input className="btn cancel-button" type="submit" name="cancel" value="CANCEL"/>
          <button className="btn btn-success" type="submit"><i className="fa fa-picture-o" aria-hidden="true"></i>&nbsp;ADD IMAGE</button>
        </div>
      </form>
    );
  }
});


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imagesCollection =  new ImagesCollection();
    var imagesModel = new Images();

    imagesCollection.fetch().then(function(){
      self.setState({collection: imagesCollection});
    });

    return {
      showForm: false,
      imagesCollection: imagesCollection,
      model: imagesModel
    }
  },
  handleClick: function(event){
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
    // this.showForm = !this.showForm;
    // this.forceUpdate();
  },
  addImage: function(imagesModel){
    this.state.collection.create(imagesModel);
    this.setState({collection: this.state.collection});
  },
  render: function(){
    var imagesDisplayed = this.state.imagesCollection.map(function(){
      return
        <Listing
          key={image.get("_id")}
          model={image} />
    });
    return (
      <div className="header well">
        <button className="btn head-button" onClick={this.handleClick}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">

                {this.state.showForm ? <ActualForm model={this.state.model} handleSubmit={this.addImage} /> : null}
                {imagesDisplayed}

              </div>
            </div>
          </div>
      </div>
    );
  }

});


module.exports = {
  AppComponent: AppComponent
};
