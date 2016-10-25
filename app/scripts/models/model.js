var $ = require('jquery');
var Backbone = require('backbone');


var Images = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    url: '',
    caption: ''
  }
});

var ImagesCollection = Backbone.Collection.extend({
  model: Images,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mckimage'

});

module.exports = {
  Images: Images,
  ImagesCollection: ImagesCollection
};
