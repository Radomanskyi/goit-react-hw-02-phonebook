import React,{Component} from 'react';


class Filter extends Component {
state = {
 name: ''
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value,
  });
  this.props.findContact(this.state.name);
};

render () {
  return (
<>
  {' '}
  <label>Find contacts by name
    <input
    type="text"
    name="name"
    defaultValue={this.state.name}
    onChange={this.handleChange} />
  </label>
</>
  )
  }
}

export default Filter