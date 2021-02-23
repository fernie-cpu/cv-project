import React, { Component } from 'react';
import '../style/style.css';
import DisplayExperience from './DisplayExperience';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      occupation: '',
      employer: '',
      dateFrom: '',
      dateTo: '',
      description: '',
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
          <label htmlFor='occupationInput' className='row'>
            Occupation:{' '}
            <input
              type='text'
              name='occupation'
              value={this.state.occupation}
              onChange={this.handleChange}
              id='occupationInput'
            />
          </label>
          <label htmlFor='employerInput' className='row'>
            Employer:{' '}
            <input
              type='text'
              name='employer'
              value={this.state.employer}
              onChange={this.handleChange}
              id='employerInput'
            />
          </label>
          <label htmlFor='dateFromInput'>
            From:{' '}
            <input
              type='date'
              name='dateFrom'
              value={this.state.dateFrom}
              onChange={this.handleChange}
              id='dateFromInput'
            />
          </label>
          <label htmlFor='dateToInput'>
            To:{' '}
            <input
              type='date'
              name='dateTo'
              value={this.state.dateTo}
              onChange={this.handleChange}
              id='dateToInput'
            />
          </label>
          <label htmlFor='descriptionInput'>
            Description:{' '}
            <textarea
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
              id='descriptionInput'
            ></textarea>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  renderGeneral() {
    const {
      isEditing,
      occupation,
      employer,
      dateFrom,
      dateTo,
      description,
    } = this.state;
    return (
      <div>
        {isEditing ? (
          <div>
            <DisplayExperience
              handleSubmit={this.handleSubmit}
              name={occupation}
              employer={employer}
              dateFrom={dateFrom}
              dateTo={dateTo}
              description={description}
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
          <h1>Experience</h1>
        </div>
        {showing ? this.form() : this.renderGeneral()}
      </section>
    );
  }
}

export default Experience;
