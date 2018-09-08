import React from "react";

class Color extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedColor : 'WHICH COLOR'
    }
  }
  handleClick = (e, value) => {
    e.preventDefault();
    alert(value + "Clicked!");
    this.setState({
      selectedColor : value
    });
  };
  render(){
    const {selectedColor} = this.state;
    return(
      <div>
        <span>선택한 색깔 : {selectedColor}</span>
        <div>
          <button onClick = {e => this.handleClick(e, "RED")}>RED</button>
          <button onClick = {e => this.handleClick(e, "BLUE")}>BLUE</button>
          <button onClick = {e => this.handleClick(e, "GREEN")}>GREEN</button>
        </div>
      </div>
    );
  }
}

export default Color;
