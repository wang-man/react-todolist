import React from 'react'
import { connect } from 'react-redux'

const Todolist = (props) => {
   // 使用解构赋值，将代码简化
   const { inputValue, changeInputValue, addOneTodo, list, deleteOneTodo } = props;
   return (
      <div>
         <div>
            <input type="text" value={inputValue} onChange={changeInputValue} />
            <button onClick={addOneTodo}>提交</button>
         </div>
         <ul>
            {
               list.map((item, index) => {
                  return <li key={index} onClick={() => { deleteOneTodo(index) }}>{item}</li>
               })
            }
         </ul>
      </div>
   )
}
// 将state映射到props，props就拥有了访问state的功能
const mapStateToProps = (state) => {
   // 返回的就是props
   return {
      inputValue: state.inputValue,
      list: state.list
   }
}
// 将dispatch映射到props，props就拥有了dispatch的功能
const mapDispatchToProps = (dispatch) => {
   // 返回的就是props
   return {
      changeInputValue(e) {
         const action = {
            type: 'change_input_value',
            value: e.target.value
         }
         dispatch(action)
      },
      addOneTodo() {
         const action = {
            type: 'add_one_todo'
         }
         dispatch(action)
      },
      deleteOneTodo(index) {
         const action = {
            type: 'delete_one_todo',
            index
         }
         dispatch(action)
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)

