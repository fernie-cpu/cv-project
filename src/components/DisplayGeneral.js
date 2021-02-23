import React, { Component } from 'react';

class DisplayGeneral extends Component {
  render() {
    const { name, address, city, state, zip, email, phone } = this.props;

    return (
      <section className='renderedSection'>
        <article>
          <span className='spanArtc'>Name: </span>
          {name}
        </article>
        <article>
          <span className='spanArtc'>Address: </span>
          {address}
        </article>
        <article>
          <span className='spanArtc'>City: </span>
          {city}
        </article>
        <article>
          <span className='spanArtc'>State: </span>
          {state}
        </article>
        <article>
          <span className='spanArtc'>Zip: </span>
          {zip}
        </article>
        <article>
          <span className='spanArtc'>Email: </span>
          {email}
        </article>
        <article>
          <span className='spanArtc'>Phone: </span>
          {phone}
        </article>
      </section>
    );
  }
}

export default DisplayGeneral;
