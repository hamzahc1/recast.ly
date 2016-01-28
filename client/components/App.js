
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentlyPlaying: exampleVideoData[0],
      allVideos: exampleVideoData};
  }
  onListEntryClick(){
    this.setState({
      currentlyPlaying: exampleVideoData[1]
    });
    // console.log(props);
    // console.log(this.props);
  }
  //On click method

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

ReactDOM.render(<App />, document.getElementById('app'));