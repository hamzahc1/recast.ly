var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange ={
      _.debounce(function(event){
        props.userSearch(event.target.value);
        }, 500)
      } />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
