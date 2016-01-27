var VideoList = (props) => (
  <div className="video-list media">
    {props.data.map(singleVideo =>
    <VideoListEntry data={singleVideo}/>        
        )}
  </div>
);



window.VideoList = VideoList;
