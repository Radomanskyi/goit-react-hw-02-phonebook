import React,{Component} from 'react';
// import filterCss from './Filter.module.css'

class Filter extends Component {
state = {
 contact: [],
 filter: '',
 name: '',
 number: ''
}
render () {
  return (
<>
  <label>Find contacts by name
    <input type="text" />
  </label>
</>
  )
  }
}

export default Filter