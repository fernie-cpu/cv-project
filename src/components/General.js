import React, { useState } from 'react';
import '../style/style.css';
import DisplayGeneral from './DisplayGeneral';

const General = (props) => {
  const [state, setState] = useState(false);

  const [display, setDisplay] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setDisplay({ ...display, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(!state);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setState(!state);
  };

  const form = () => {
    return (
      <div>
        <form className='generalForm'>
          <label htmlFor='nameInput' className='row'>
            Name:{' '}
            <input
              type='text'
              name='name'
              value={display.name}
              onChange={handleChange}
              id='nameInput'
            />
          </label>
          <label htmlFor='addressInput' className='row'>
            Address:{' '}
            <input
              type='text'
              name='address'
              value={display.address}
              onChange={handleChange}
              id='addressInput'
            />
          </label>
          <label htmlFor='cityInput'>
            City:{' '}
            <input
              type='text'
              name='city'
              value={display.city}
              onChange={handleChange}
              id='cityInput'
            />
          </label>
          <label htmlFor='stateInput'>
            State:{' '}
            <input
              type='text'
              name='state'
              value={display.state}
              onChange={handleChange}
              id='stateInput'
            />
          </label>
          <label htmlFor='emailInput'>
            Email:{' '}
            <input
              type='email'
              name='email'
              value={display.email}
              onChange={handleChange}
              id='emailInput'
            />
          </label>
          <label htmlFor='phoneInput'>
            Phone:{' '}
            <input
              type='tel'
              name='phone'
              value={display.phone}
              onChange={handleChange}
              id='phoneInput'
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  const renderGeneral = () => {
    const { handleSubmit, name, address, city, state, email, phone } = display;
    return (
      <div>
        {display ? (
          <div className='renderedDiv'>
            <DisplayGeneral
              handleSubmit={handleSubmit}
              name={name}
              address={address}
              city={city}
              state={state}
              email={email}
              phone={phone}
            />
            <button className='editBtn' onClick={handleClick}>
              Edit
            </button>
          </div>
        ) : (
          form()
        )}
      </div>
    );
  };

  return (
    <section className='divGeneral'>
      <div className='sectionTitle'>
        <h1>General Information</h1>
      </div>
      {state ? renderGeneral() : form()}
    </section>
  );
};

export default General;
