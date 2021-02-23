import React, { Component } from 'react';
import '../style/style.css';
import DisplayEducational from './DisplayEducational';

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      degree: '',
      dateFrom: '',
      dateTo: '',
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
          <label htmlFor='schoolInput' className='row'>
            School:{' '}
            <input
              type='text'
              name='school'
              value={this.state.school}
              onChange={this.handleChange}
              id='schoolInput'
            />
          </label>
          <label htmlFor='degreeInput' className='row'>
            Degree:{' '}
            <input
              type='text'
              name='degree'
              value={this.state.degree}
              onChange={this.handleChange}
              id='degreeInput'
            />
          </label>
          <label htmlFor='dateInput'>
            From:{' '}
            <input
              type='date'
              name='dateFrom'
              value={this.state.dateFrom}
              onChange={this.handleChange}
              id='dateInput'
            />
          </label>
          <label htmlFor='date2Input'>
            To:{' '}
            <input
              type='date'
              name='dateTo'
              value={this.state.dateTo}
              onChange={this.handleChange}
              id='date2Input'
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  renderGeneral() {
    const { isEditing, school, degree, dateFrom, dateTo } = this.state;
    return (
      <div>
        {isEditing ? (
          <div className='renderedDiv'>
            <DisplayEducational
              handleSubmit={this.handleSubmit}
              school={school}
              degree={degree}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
            <button className='editBtn' onClick={this.handleClick}>
              Edit
            </button>
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
          <h1>Education</h1>
        </div>
        {showing ? this.form() : this.renderGeneral()}
      </section>
    );
  }
}

export default Educational;
