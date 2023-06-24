import React,{Component} from 'react';
// import filterCss from './Filter.module.css'

class Filter extends Component {
state = {
 name: ''
}
render () {
  return (
<>
  {' '}
  <label>Find contacts by name
    <input
    type="text"
    name="name"
    value={this.state.name}
    onChange={this.handleChange} />
  </label>
</>
  )
  }
}

export default Filter