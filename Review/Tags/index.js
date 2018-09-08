import React from "react";

class List extends React.Component{
  render(){
    const {list} = this.props;
    return(
      <div>
        <h1>태그</h1>
        {list.map(item => {
          return <div>{item}</div>;
        })}
      </div>
    );
  }
}

class Adder extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleClick = () => {
    const {value} = this.state;
    this.props.onClick(value);
    this.setState({
      value : ""
    });
  }

  render(){
    const {value} = this.state;
    return(
      <div>
        <input value = {value} onChange = {this.handleChange}/>
        <button onClick = {this.handleClick}>Add</button>
      </div>
    );
  }
}

class Tags extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tags : ["이태원 카페", "신사동 맛집", "가을 코디"]
    };
  }

  handleClick = value => {
    if(value !== ""){
      this.setState({
        tags : [...this.state.tags, value]
      });
    }
  };

  render(){
    const {tags} = this.state;
    return(
      <div>
        <List list = {tags}/>
        <Adder onClick = {this.handleClick}/>
      </div>
    );
  }
}

export default Tags;
