import React from "react";

class TodoList extends React.Component{
  // Todo의 render에서 정의해준 이벤트 onDelete?
  handleDelete = value => {
    this.props.onDelete(value);
  };
  render(){
    //list를 props객체로 설정
    const {list} = this.props;
    return list.map((item, index) => {
      return(
        <div key={index}>
          <span>{item}</span>
          <button onClick={()=> this.handleDelete(item)}>삭제</button>
        </div>
      );
    });
  }
}

export default TodoList;
