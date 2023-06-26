import React,{Component} from 'react';


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
    defaultValue={this.state.name}
    onChange={this.props.findContact} />
  </label>
</>
  )
  }
}

export default Filter