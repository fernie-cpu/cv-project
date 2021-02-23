import React, { Component } from 'react';
import '../style/style.css';
import DisplayGeneral from './DisplayGeneral';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      phone: '',
      isEditing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isEditing: true,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isEditing: false,
    });
  }

  form = () => {
    return (
      <div>
        <form className='generalForm'>
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
          <label htmlFor='stateInput'>
            State:{' '}
            <input
              type='text'
              name='state'
              value={this.state.state}
              onChange={this.handleChange}
              id='stateInput'
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
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  renderGeneral() {
    const {
      isEditing,
      name,
      address,
      city,
      state,
      zip,
      email,
      phone,
    } = this.state;
    return (
      <div>
        {isEditing ? (
          <div>
            <DisplayGeneral
              handleSubmit={this.handleSubmit}
              name={name}
              address={address}
              city={city}
              state={state}
              zip={zip}
              email={email}
              phone={phone}
            />
            <button onClick={this.handleClick}>Edit</button>
          </div>
        ) : (
          this.form()
        )}
      </div>
    );
  }

  render() {
    const { showing } = this.state;

    return (
      <section className='divGeneral'>
        <div className='sectionTitle'>
          <h1>General Information</h1>
        </div>
        {showing ? this.form() : this.renderGeneral()}
      </section>
    );
  }
}

export default General;
