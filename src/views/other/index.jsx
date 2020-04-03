import React, {Component} from 'react'
import Radio from '../../components/radio/index'
import './index.less'

class Other extends Component{
  constructor(props){
    super(props)
    this.state = {
      radioValue: '',
      items: [
        {id:'c1', text:'A', value:1},
        {id:'c2', text:'B', value:2},
        {id:'c3', text:'C', value:3},
      ]
    }
  }

  render(){
    return (
      <div className="other">
        <Radio 
          value={this.state.radioValue}
          items={this.state.items}
          disabled={false} 
          //direction="vertical"
          onChange={this.handleChange.bind(this)} 
        />

        {/* <Radio /> */}
      </div>
    )
  }

  handleChange(e){
    //console.log('parent handleChange:', e, typeof(e))
    this.setState({radioValue: e})
  }
}

export default Other