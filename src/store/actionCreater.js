import { CHANGE_INPUT, ADD_TODO, DELETE_TODO, REMOTE_TODO } from './actionType'

const change_input_action = (value) =>{
   return {
      type: CHANGE_INPUT,
      value
   }
}
const add_todo_action = () =>{
   return {
      type: ADD_TODO
   }
}
const delete_todo_action = (index) =>{
   return {
      type: DELETE_TODO,
      index
   }
}
// 网络请求，请求网络上的todo
const remote_todo_action = (list) =>{
   return {
      type: REMOTE_TODO,
      list
   }
}

export {change_input_action, add_todo_action, delete_todo_action, remote_todo_action}