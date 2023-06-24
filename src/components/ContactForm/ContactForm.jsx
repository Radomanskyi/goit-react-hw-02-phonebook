import React,{Component} from 'react';
import contactFormCss from './contactForm.module.css'

class ContactForm extends Component {
state = {
    name: '',
    number: ''
}

handleChenche = ({target}) => {
this.setState({
  [target.name]: target.value,
})
}

handleSubmit = (e) => {
e.preventDefault();

const newContact = {
  name: this.state.name,
  number: this.state.number,
};

this.props.addNewContact(newContact);
    this.setState({
      name:'',
      number:''
    })
};

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
    <input
    type="number"
    name="number"
    onChange={this.handleChenche}
    value={this.state.number} />
  </label>
  <button type="submit">Add contact</button>
</form>
  )
  }
}

export default ContactForm