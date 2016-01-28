var VideoList = (props) => (
  <div className="video-list media">
    {props.data.map(singleVideo =>
    <VideoListEntry data={singleVideo} onVideoEntryClick={props.onListEntryClick}/>        
        )}
  </div>
);

window.VideoList = VideoList;
