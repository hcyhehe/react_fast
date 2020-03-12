import React, { Component } from 'react'
import ComLi from '../../components/comLi'
import './index.less'

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputAdd = this.handleInputAdd.bind(this)
  }

  render() {
    return (
      <div className="input">
        <div className="line">
          <label htmlFor="Ipt">Input: </label>
          <input id="Ipt" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleInputAdd}>Submit</button>
        </div>
        <ul>
          { this.getList() }
        </ul>
      </div>
    )
  }

  getList(){
    return this.state.list.map((item, index) => {
      return(
        <ComLi 
          key={index} 
          index={index} 
          content={item}
          deleteItem={this.handleLiRemove.bind(this)}
        />
      )
    })
  }

  handleInputChange(e){
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleInputAdd(){
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleLiRemove(index){
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default Input