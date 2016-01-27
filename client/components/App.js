var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer data={exampleVideoData[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList data={exampleVideoData}/>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));