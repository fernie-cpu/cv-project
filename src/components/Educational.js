import React, { Component } from 'react';

class Educational extends Component {
  constructor() {
    super();
    this.state = {
      school: '',
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
    const { school } = this.state;
    console.log(school);
    this.setState({
      school: '',
    });
  }

  render() {
    return (
      <div className='divGeneral'>
        <div class='sectionTitle'>
          <h1>Education</h1>
        </div>
        <form className='generalForm' onSubmit={this.handleSubmit}>
          <label htmlFor='schoolInput'>
            Name of School:
            <input
              type='text'
              name='school'
              value={this.state.school}
              onChange={this.handleChange}
              id='schoolInput'
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Educational;
