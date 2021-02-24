import React, { useState } from 'react';
import '../style/style.css';
import DisplayEducational from './DisplayEducational';

const Educational = (props) => {
  const [state, setState] = useState(false);

  const [display, setDisplay] = useState({
    school: '',
    degree: '',
    dateFrom: '',
    dateTo: '',
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
          <label htmlFor='schoolInput' className='row'>
            School:{' '}
            <input
              type='text'
              name='school'
              value={state.school}
              onChange={handleChange}
              id='schoolInput'
            />
          </label>
          <label htmlFor='degreeInput' className='row'>
            Degree:{' '}
            <input
              type='text'
              name='degree'
              value={state.degree}
              onChange={handleChange}
              id='degreeInput'
            />
          </label>
          <label htmlFor='dateInput'>
            From:{' '}
            <input
              type='date'
              name='dateFrom'
              value={state.dateFrom}
              onChange={handleChange}
              id='dateInput'
            />
          </label>
          <label htmlFor='date2Input'>
            To:{' '}
            <input
              type='date'
              name='dateTo'
              value={state.dateTo}
              onChange={handleChange}
              id='date2Input'
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  const renderGeneral = () => {
    const { handleSubmit, school, degree, dateFrom, dateTo } = display;
    return (
      <div>
        {display ? (
          <div className='renderedDiv'>
            <DisplayEducational
              handleSubmit={handleSubmit}
              school={school}
              degree={degree}
              dateFrom={dateFrom}
              dateTo={dateTo}
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
        <h1>Education</h1>
      </div>
      {state ? renderGeneral() : form()}
    </section>
  );
};

export default Educational;
