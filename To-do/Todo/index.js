import React from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList"

class Todo extends React.Component{
// 1) 생성자 내부에 state 초기화 - 빈 배열 생성
  constructor(props){
    super(props);
    this.state = {
      todos : []
    };
  }
  // 삭제 이벤트 생성 filter 메소드를 사용해서 조건에 맞는 값들만 배열로 생성함
  handleDelete = value => {
    const newTodos = this.state.todos.filter(item => item !== value);
    this.setState({
      todos : newTodos
    });
  }
  // 새로운 값이 저장된 배열로 변경
  handleAdd = value => {
    this.setState({
      todos : [...this.state.todos, value]
    });
  };
  render(){
    const{todos} = this.state;
    return(
      <div>
        <TodoList list = {todos} onDelete={this.handleDelete} />
        <TodoInput onAdd = {this.handleAdd} />
      </div>
    );
  }
}

export default Todo;
