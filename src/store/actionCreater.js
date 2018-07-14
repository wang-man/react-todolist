import { CHANGE_INPUT, ADD_TODO, DELETE_TODO } from './actionType'

const change_input = (value) =>{
   return {
      type: CHANGE_INPUT,
      value
   }
}
const add_todo = () =>{
   return {
      type: ADD_TODO
   }
}
const delete_todo = (index) =>{
   return {
      type: DELETE_TODO,
      index
   }
}

export {change_input, add_todo, delete_todo}