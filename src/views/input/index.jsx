import React, { Component } from 'react'
import './index.less'

class List extends Component {
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
          {
            this.state.list.map((item, index) => {
              return(
                <li 
                  key={index} 
                  onClick={this.handleLiRemove.bind(this, index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
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
    console.log('index:'+index)
  }
}

export default List