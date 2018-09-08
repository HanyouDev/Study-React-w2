import React from "react";

class SearchBar extends React.Component{
  render(){
    const {keyword} = this.props;
    return <input value = {keyword} onChange = {this.props.onChange}/>;
  }
}

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {keyword : ""};
  }
  handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      keyword : value
    });
  }
  render(){
    const {keyword} = this.state;
    return(
      <div>
        <div>검색어 : {keyword}</div>
        <SearchBar keyword = {keyword} onChange = {this.handleChange}/>
      </div>
    );
  }
}

export default Search;
