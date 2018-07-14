import React, {Fragment} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store/index'
import { change_input, add_todo, delete_todo } from './store/actionCreater'
const data = [
   '早上起来搞学习',
   '中午睡午觉',
   '睡完午觉继续搞学习',
   '晚上看电影'
]
class Todolist extends React.Component{
   constructor(props){
      super(props)
      this.inputChange = this.inputChange.bind(this)
      this.storeChange = this.storeChange.bind(this)
      this.addTodo = this.addTodo.bind(this)
      this.state = store.getState()          // 从store中获取
      store.subscribe(this.storeChange)      // 只有订阅了store，组件才会响应更新。注意参数是一个函数
   }
   render(){
      return (
         <Fragment>
            <div>
               <h1 style={{textAlign:'center', width: '300px'}}>Todo List</h1>
               <Input placeholder='what todo' style={{width: '300px', marginRight: '10px'}} onChange={this.inputChange} value={this.state.inputValue}></Input>
               <Button type='primary' onClick={this.addTodo}>提交</Button>
               <List style={{width: '300px', marginTop: '10px'}} bordered dataSource={this.state.list} renderItem={(item,index) =>(<List.Item onClick={this.deleteTodo.bind(this, index)}>{item}</List.Item>)}>
               </List>
            </div>
         </Fragment>
      )
   }
   // 输入的时候
   inputChange(e){
      const action = change_input(e.target.value);
      store.dispatch(action);
   }
   // 提交的时候
   addTodo(){
      const action = add_todo();
      store.dispatch(action);
   }
   // 删除一条todo
   deleteTodo(index){
      const action = delete_todo(index)
      store.dispatch(action);
   }
   // 被订阅的函数
   storeChange(){
      this.setState(store.getState());
   }
}

export default Todolist