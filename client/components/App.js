
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentlyPlaying: this.props.videoList[this.props.startingIndex],
      allVideos: this.props.videoList};
  }
  onListEntryClick(event){
    console.log(event.target.innerHTML);
    for(var i = 0; i < this.props.videoList.length; i++) {
      if(this.props.videoList[i].snippet.title === event.target.innerHTML){
        this.setState({
          currentlyPlaying: this.props.videoList[i]
        });
        
      }
    }


  }

  render(){
    return (
    <div>
      <Nav />
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




// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer data={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList data={exampleVideoData}/>
//     </div>
//   </div>
// );

ReactDOM.render(<App videoList={exampleVideoData} startingIndex={0}/>, document.getElementById('app'));