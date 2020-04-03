import React, { Component } from 'react'
import './index.css'

class Radio extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    //console.log('this.props:', this.props)
    let { value, disabled=false, items=[], direction="horizontal" } = this.props
    let dom = []
    items.map((item, index)=>{
      dom.push(
        <div key={index}>
          <input 
            name="checkGroup"
            type="radio" 
            id={item.id}
            checked={item.value===value ? true : false}
            disabled={disabled}
            onChange={e=>this.handleChange(e, item.value)} 
          />
          <label htmlFor={item.id}>{item.text}</label>
        </div>
      )
    })
    return(
      //horizontal and vertical
      <div className={direction==="horizontal" ? "eds-ui-radio-horizontal" : ""}>
        {dom}
      </div>
    )
  }

  handleChange(e, value){
    e.persist()
    let { onChange } = this.props
    onChange(value)
  }
}

export default Radio