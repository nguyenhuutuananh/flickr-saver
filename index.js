const Flickr = require('flickrapi'),
flickrOptions = {
  api_key: '5fe70c8edd29429f2b274ca3737ad71e',
  secret: 'a6803ae28951eaa9',
  permissions: 'write',
  authenticated: true,
};

Flickr.authenticate(flickrOptions, function(err, flickr) {
  // we can now use "flickr" as our API object
  if(err) { throw new Error(err); }
  flickr.people.getPhotos(
    {
      user_id: '123675113@N02'
    },
    (error, result) => {
      if (error) {
        throw new Error(error);
      }
      console.log(result);
    }
  );
});
