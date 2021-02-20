import React, { Component } from 'react';
import '../style/style.css';

class General extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      city: '',
      zip: '',
      email: '',
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, address, city, zip, email, phone } = this.state;
    console.log(name, address, city, zip, email, phone);
    this.setState({
      name: '',
      address: '',
      city: '',
      zip: '',
      email: '',
      phone: '',
    });
  }

  render() {
    return (
      <div className='divGeneral'>
        <div className='sectionTitle'>
          <h1>General Information</h1>
        </div>
        <form className='generalForm' onSubmit={this.handleSubmit}>
          <label htmlFor='nameInput' className='row'>
            Name:{' '}
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              id='nameInput'
            />
          </label>
          <label htmlFor='addressInput' className='row'>
            Address:{' '}
            <input
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.handleChange}
              id='addressInput'
            />
          </label>
          <label htmlFor='cityInput'>
            City:{' '}
            <input
              type='text'
              name='city'
              value={this.state.city}
              onChange={this.handleChange}
              id='cityInput'
            />
          </label>
          <label htmlFor='zipInput'>
            Zip:{' '}
            <input
              type='number'
              name='zip'
              value={this.state.zip}
              onChange={this.handleChange}
              id='zipInput'
              placeholder='00000000'
            />
          </label>
          <label htmlFor='emailInput'>
            Email:{' '}
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              id='emailInput'
            />
          </label>
          <label htmlFor='phoneInput'>
            Phone:{' '}
            <input
              type='tel'
              name='phone'
              value={this.state.phone}
              onChange={this.handleChange}
              id='phoneInput'
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
