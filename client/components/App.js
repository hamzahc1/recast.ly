// var startData = searchYouTube({
// q:"england vs mexico football",
// key:'AIzaSyDg8iGu9PzQXz8VT0H2U7QkSqZ225rdrLE',
// maxResults:10
// });

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentlyPlaying: exampleVideoData[0],
      allVideos: []};
  }
  onListEntryClick(clickedData){
        this.setState({
          currentlyPlaying: clickedData
        });
  }

  onUserSearch(query){
   var searchCallback = (data) =>{
      this.setState({
        currentlyPlaying: data.items[0],
        allVideos: data.items,
      });
    };
    searchYouTube({q:query,key:'AIzaSyDg8iGu9PzQXz8VT0H2U7QkSqZ225rdrLE',maxResults:10}, searchCallback); 
  }

  // componentDidMount(){
  //  var searchCallback = (data) =>{
  //     this.setState({
  //       currentlyPlaying: data.items[0],
  //       allVideos: data.items,
  //     });
  //   };
  //   searchYouTube({q:"mexico city!",key:'AIzaSyDg8iGu9PzQXz8VT0H2U7QkSqZ225rdrLE',maxResults:10}, searchCallback);
  // }

  render(){
    return (
    <div>
      <Nav onUserSearch = {this.onUserSearch.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer data={this.state.currentlyPlaying} />
      </div>
      <div className="col-md-5">
        <VideoList data={this.state.allVideos} onListEntryClick={this.onListEntryClick.bind(this)}/>
      </div>
    </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));