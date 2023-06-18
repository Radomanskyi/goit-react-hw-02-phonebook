import React,{Component} from 'react';
import contactFormCss from './contactForm.module.css'

class ContactForm extends Component {
state = {
  name: ''
}
render () {
  return (
<div className={contactFormCss.container}>
  <label>Name
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  />
  </label>
  <label>Number
    <input type="number" />
  </label>
  <button>Add contact</button>
</div>
  )
  }
}

export default ContactForm