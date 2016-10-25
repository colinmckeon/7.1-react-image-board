var React = require('react');
var Backbone = require('backbone');

var ImageForm = React.createClass({
  componentWillMount: function(){

    this.showForm = false;
  },
  handleClick: function(event){
    event.preventDefault();

    this.showForm = !this.showForm;
    this.forceUpdate();
  },
  render: function(){

    var display;
    if(this.showForm){
      var display = (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">

              <form id="edit-form">
                <input id="image-url" className="form-control" type="text" name="url" placeholder="Image URL" value=""/>
                <br/>
                <textarea id="image-caption" className="form-control" type="text" name="caption" placeholder="Image Caption" rows="4" value=""/>
                <br/>
                <div className="dos-btns">
                  <input className="btn cancel-button" type="submit" name="cancel" value="CANCEL"/>
                  <button className="btn btn-success" type="submit"><i className="fa fa-picture-o" aria-hidden="true"></i>&nbsp;ADD IMAGE</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="header well">
        <button className="btn head-button" onClick={this.handleClick}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
        {display}
      </div>
    );
  }

});


module.exports = {
  ImageForm: ImageForm
}
