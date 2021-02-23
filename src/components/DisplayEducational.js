import React, { Component } from 'react';

class DisplayEducational extends Component {
  render() {
    const { school, address, dateFrom, dateTo } = this.props;

    return (
      <section className='renderedSection'>
        <article>
          <span className='spanArtc'>School: </span>
          {school}
        </article>
        <article>
          <span className='spanArtc'>Address: </span>
          {address}
        </article>
        <article>
          <span className='spanArtc'>From: </span>
          {dateFrom}
        </article>
        <article>
          <span className='spanArtc'>To: </span>
          {dateTo}
        </article>
      </section>
    );
  }
}

export default DisplayEducational;
