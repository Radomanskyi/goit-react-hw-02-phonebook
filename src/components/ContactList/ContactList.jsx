import React,{Component} from 'react';
// import filterCss from './Filter.module.css'

class ContactList extends Component {
state = {
    contacts: [],
    name: '',
    number: ''
}
render () {
  return (
<>
  <p>Eden Clements : 645-17-79</p>
  <p>Hermione Kline : 443-89-12</p>
  <p>Rosie Simpson : 459-12-56</p>
</>
  )
  }
}

export default ContactList