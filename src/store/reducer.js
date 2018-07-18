// import { CHANGE_INPUT, ADD_TODO, DELETE_TODO, REMOTE_TODO } from './actionType'

const defaultState = {
   inputValue: '',
   list: ['吃饭', '睡觉']
}
// store将任务转给reducer处理，在reducer处理之前store并未有任何改变，是reducer改变了store
export default (state=defaultState, action)=>{
   if(action.type === 'change_input_value'){
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;       // 更新state，这里具体的要将inputValue更新
      return newState;                          // reducer要返回新的state给store
   }
   if(action.type === 'add_one_todo'){
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(state.inputValue);       // 更新state，这里具体的要将inputValue更新
      newState.inputValue = '';
      return newState;                          // reducer要返回新的state给store
   }
   if(action.type === 'delete_one_todo'){
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);       // 更新state，这里具体的要将inputValue更新
      return newState;                          // reducer要返回新的state给store
   }
   // if(action.type === ADD_TODO){
   //    let newState = JSON.parse(JSON.stringify(state));
   //    newState.list.push(newState.inputValue);    // 将input中的值添加到list
   //    newState.inputValue = '';
   //    return newState;    
   // }
   // if(action.type === DELETE_TODO){
   //    let newState = JSON.parse(JSON.stringify(state));
   //    newState.list.splice(action.index, 1);
   //    return newState;
   // }
   // if(action.type === REMOTE_TODO){
   //    let newState = JSON.parse(JSON.stringify(state));
   //    newState.list = action.list;
   //    return newState;
   // }
   return state      // 默认返回去state
}