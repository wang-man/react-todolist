import React from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { change_input_action, add_todo_action, delete_todo_action, remote_todo_action } from './store/actionCreater'
import TodolistUI from './TodolistUI'

class Todolist extends React.Component{
   constructor(props){
      super(props)
      this.inputChange = this.inputChange.bind(this)
      this.storeChange = this.storeChange.bind(this)
      this.addTodo = this.addTodo.bind(this)
      this.deleteTodo = this.deleteTodo.bind(this)
      this.state = store.getState()          // 从store中获取
      store.subscribe(this.storeChange)      // 只有订阅了store，组件才会响应更新。注意参数是一个函数
   }
   render(){
      return (
         <TodolistUI inputValue={this.state.inputValue} list={this.state.list} inputChange={this.inputChange} addTodo={this.addTodo} deleteTodo={this.deleteTodo} />
      )
   }
   // 输入的时候
   inputChange(e){
      const action = change_input_action(e.target.value);
      store.dispatch(action);
   }
   // 提交的时候
   addTodo(){
      const action = add_todo_action();
      store.dispatch(action);
   }
   // 删除一条todo
   deleteTodo(index){
      const action = delete_todo_action(index)
      store.dispatch(action);
   }
   // 加载远程todo
   componentDidMount(){
      const action = remote_todo_action();
      store.dispatch(action);
   }
   // 被订阅的函数
   storeChange(){
      this.setState(store.getState());
   }
}

export default Todolist