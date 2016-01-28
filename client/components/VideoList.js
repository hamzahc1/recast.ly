var VideoList = (props) => (
  <div className="video-list media">
    {props.data.map(singleVideo =>
    <VideoListEntry data={singleVideo} onListEntryClick={props.onListEntryClick}/>        
        )}
  </div>
);

window.VideoList = VideoList;
