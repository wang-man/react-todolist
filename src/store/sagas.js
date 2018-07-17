import { takeEvery, put } from 'redux-saga/effects'
import { REMOTE_TODO } from './actionType'
import { remote_todo_action } from './actionCreater'
import axios from 'axios'

function* getRemote() {
   // generator函数对ajax无法使用promise语法，所以使用try catch语法代替
   try {
      const res = yield axios.get('/list.json');
      const action = remote_todo_action(res.data);
      yield put(action);      // put，可以替代store.dispatch使用
   } catch (error) {
      console.log('list.json请求出错')
   }

}

function* mySaga() {
   yield takeEvery(REMOTE_TODO, getRemote);     // 如果，则。。。
}

export default mySaga;