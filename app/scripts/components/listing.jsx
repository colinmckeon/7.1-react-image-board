var React = require('react');
var Backbone = require('backbone');


var ListingComponent = React.createClass({
  render: function(){
    var imageSrc = this.props.model.get('url');
    var imageCaption = this.props.model.get('caption');

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">

            <div className="content-holder">

              <div className="image-holder">
                <img src="{imageSrc}" alt="..." />
              </div>

              <div className="text-holder">
                  {imageCaption}
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
