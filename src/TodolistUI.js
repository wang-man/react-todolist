import React from 'react'

import {Input, Button, List} from 'antd'

const TodolistUI = (props)=> {
   return (
      <div>
         <h1 style={{textAlign:'center', width: '300px'}}>Todo List</h1>
         <Input placeholder='what todo' style={{width: '300px', marginRight: '10px'}} onChange={props.inputChange} value={props.inputValue}></Input>
         <Button type='primary' onClick={props.addTodo}>提交</Button>
         <List style={{width: '300px', marginTop: '10px'}} bordered dataSource={props.list} renderItem={(item,index) =>(<List.Item onClick={()=>{props.deleteTodo(index)} }>{item}</List.Item>)}>
         </List>
      </div>
   )
}

export default TodolistUI;