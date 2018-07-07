import React from 'react'
import PropTypes from 'prop-types'

class Todoitem extends React.Component{
   constructor(props){
      super(props)
      this.removeHandle = this.removeHandle.bind(this)
   }

   shouldComponentUpdate(nextProps, nextState){
      if(nextProps.itemText !== this.props.itemText){
         return true;
      }else{
         return false;
      }
   }

   render(){
      console.log('todoItem render')
      return (
         <li onClick={this.removeHandle}>
            {this.props.itemText}
         </li>
      )
   }
   removeHandle(){
      this.props.removeitem(this.props.index)
   }
}

Todoitem.propTypes = {
   itemText: PropTypes.string,
   index: PropTypes.number.isRequired,
   removeitem: PropTypes.func
}
export default Todoitem