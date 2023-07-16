
import React, { Component } from 'react'
import css from './phonebook.module.css'

class PhoneBook extends Component {
state = {
  name:'',
  number:''
}
handleChange = (e) => {
  const { name, value } = e.target;

  if (name === 'number') {
    const formattedValue = this.formatNumber(value);
    const isValid = formattedValue.length <= 9;

    if (isValid) {
      this.setState({ [name]: formattedValue });
    } else {
      ;
    }
  } else {
    this.setState({ [name]: value });
  }
};
formatNumber = (value) => {
  // Видаляємо всі нецифрові символи зі значення
  const numericValue = value.replace(/\D/g, '');

  // Додаємо дефіси між числами
  const formattedValue = numericValue.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');

  return formattedValue;
};
handleSubmit = (e) => {
e.preventDefault()
this.props.createContact(this.state)
}

render(){
  
    return (<form onSubmit={this.handleSubmit}><input
      className={css.name_input}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        /><input
        className={css.tel_input}
        type="tel"
        name="number"
      //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={this.state.number}
          onChange={this.handleChange}
  
      />
        <button type='submit' >Add Contact</button></form>)
  }
}

export default PhoneBook


