var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
          part: 'snippet', 
          type: 'video', 
          videoEmbeddable: 'true',  
          contentType: 'application/json',
          q: options.q ,
          key: options.key,
          maxResults: options.maxResults
        },
    success: callback,
    error: function(data){
      console.error(data);
    }
  });
};



window.searchYouTube = searchYouTube;
