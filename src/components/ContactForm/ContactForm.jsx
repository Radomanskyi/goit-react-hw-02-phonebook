import React,{Component} from 'react';
import contactFormCss from './contactForm.module.css'

class ContactForm extends Component {
state = {
    contacts: [],
    name: '',
    number: ''
}

handleChenche = ({target}) => {
this.setState({
  [target.name]: target.value,
})
}

handleSubmit = (e) => {
e.preventDefault()
}

render () {
  return (
<form className={contactFormCss.container}
onSubmit={this.handleSubmit}>
  <label>Name
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleChenche}
  value={this.state.name}
  />
  </label>
  <label>Number
    <input type="number"
    name="number"
    onChange={this.handleChenche}
    value={this.state.number} />
  </label>
  <button>Add contact</button>
</form>
  )
  }
}

export default ContactForm