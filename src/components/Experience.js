import React, { useState } from 'react';
import '../style/style.css';
import DisplayExperience from './DisplayExperience';

const Experience = (props) => {
  const [state, setState] = useState(false);

  const [display, setDisplay] = useState({
    occupation: '',
    employer: '',
    dateFrom: '',
    dateTo: '',
    description: '',
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
          <label htmlFor='occupationInput' className='row'>
            Occupation:{' '}
            <input
              type='text'
              name='occupation'
              value={state.occupation}
              onChange={handleChange}
              id='occupationInput'
            />
          </label>
          <label htmlFor='employerInput' className='row'>
            Employer:{' '}
            <input
              type='text'
              name='employer'
              value={state.employer}
              onChange={handleChange}
              id='employerInput'
            />
          </label>
          <label htmlFor='dateFromInput'>
            From:{' '}
            <input
              type='date'
              name='dateFrom'
              value={state.dateFrom}
              onChange={handleChange}
              id='dateFromInput'
            />
          </label>
          <label htmlFor='dateToInput'>
            To:{' '}
            <input
              type='date'
              name='dateTo'
              value={state.dateTo}
              onChange={handleChange}
              id='dateToInput'
            />
          </label>
          <label htmlFor='descriptionInput'>
            Description:{' '}
            <textarea
              name='description'
              value={state.description}
              onChange={handleChange}
              id='descriptionInput'
            ></textarea>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  const renderGeneral = () => {
    const {
      handleSubmit,
      occupation,
      employer,
      dateFrom,
      dateTo,
      description,
    } = display;
    return (
      <div>
        {display ? (
          <div className='renderedDiv'>
            <DisplayExperience
              handleSubmit={handleSubmit}
              name={occupation}
              employer={employer}
              dateFrom={dateFrom}
              dateTo={dateTo}
              description={description}
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
        <h1>Experience</h1>
      </div>
      {state ? renderGeneral() : form()}
    </section>
  );
};

export default Experience;
