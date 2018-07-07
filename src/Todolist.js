import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Todoitem from './todoItem'
class Todolist extends Component {
	constructor(props){
		// 当组件的state和props发生改变的时候，render函数会执行
		super(props)
		this.state = {
			inputValue: '',
			list: []
		}
		this.inputChange = this.inputChange.bind(this)
		this.removeList = this.removeList.bind(this)
		this.addList = this.addList.bind(this)
	}

	componentDidUpdate(){
		axios.get('/api/todolist').then((res)=>{
			console.log(res)
		})
	}

	// 组件的ui全部由render函数返回
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insert">输入待办事项</label>
					<input type="text" id='insert'  onChange={this.inputChange} value={this.state.inputValue}/><button onClick={this.addList}>提交</button>
				</div>
				<ul ref={(ul)=>{this.ulEl = ul}}>
					{
						this.state.list.map((item, i)=>{
							return <Todoitem key={i} index={i} itemText={item} removeitem={this.removeList} />
						})
					}
				</ul>
			</Fragment>
		);
	}
	inputChange(e){
		this.setState({
			inputValue: e.target.value
		})
	}
	addList(){
		this.setState((currentState)=>{
			return {
				list: [...currentState.list, currentState.inputValue]
			}
		}, ()=>{
			// console.log(this.ulEl.querySelectorAll('li'))
			
		})
		this.setState({
			inputValue: ''
		})
	}
	removeList(i){
		const list = [...this.state.list];
		list.splice(i, 1);
		this.setState(()=>{
			return {list}
		})
	}
}


export default Todolist;