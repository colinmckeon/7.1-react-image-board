var React = require('react');
var Backbone = require('backbone');


var ListingComponent = React.createClass({
  handleDelete: function(e){
    e.preventDefault();
    this.props.deleteImage(this.props.model);
  },
  render: function(){
    var imageSrc = this.props.model.get('url');
    var imageCaption = this.props.model.get('caption');
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 well colin">

            <div className="content-holder">

              <div className="image-holder">
                <img src={imageSrc} alt="..." />
              </div>

              <div className="text-holder">
                  <br/>
                  <section id="caption-image">{imageCaption}</section>
                  <hr/>
                  <div className="del-edit">
                    <button className="btn btn-info">EDIT</button> &nbsp;&nbsp;
                    <button onClick={this.handleDelete} className="btn btn-danger">DELETE FOR ALL ETERNITY</button>

                  </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  ListingComponent: ListingComponent
};
