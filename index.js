const flickrUserKey = require('./enviroments/dev');

var Flickr = require('flickr-sdk');
var flickr = new Flickr(
  Flickr.OAuth.createPlugin(
    flickrUserKey.FLICKR_API_KEY,
    flickrUserKey.FLICKR_SECRET,
    flickrUserKey.FLICKR_ACCESS_TOKEN,
    flickrUserKey.FLICKR_ACCESS_TOKEN_SECRET
  )
);

flickr.people
  .getPhotos({
    user_id: ''
  })
  .then(result => {
    console.log(result.body);
  })
  .catch(error => {
    throw new Error(error);
  });
