import React, { Component } from 'react';

class DisplayExperience extends Component {
  render() {
    const { occupation, employer, dateFrom, dateTo, description } = this.props;

    return (
      <section className='renderedSection'>
        <article>
          <span className='spanArtc'>Occupation: </span>
          {occupation}
        </article>
        <article>
          <span className='spanArtc'>Employer: </span>
          {employer}
        </article>
        <article>
          <span className='spanArtc'>From: </span>
          {dateFrom}
        </article>
        <article>
          <span className='spanArtc'>To: </span>
          {dateTo}
        </article>
        <article>
          <span className='spanArtc'>Description: </span>
          {description}
        </article>
      </section>
    );
  }
}

export default DisplayExperience;
