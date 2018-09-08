import React from "react";

class Artists extends React.Component{
  render(){
    const {list} = this.props;
    return(
      <ul>
      {list.map((item) => {
        return(
          <li>{item}</li>
        );
      })}
      </ul>
    );
  }
}

class List extends React.Component{
  render(){
    const artists = [
      '악동뮤지션',
      '아가아가',
      '안녕안녕'
    ]
    return (
      <div>
        <h1>한국의 아티스트</h1>
          <Artists list = {artists}/>
      </div>
    );
  }
}

export default List;
