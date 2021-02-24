import React from 'react';
import '../style/style.css';

const DisplayGeneral = (props) => {
  const { name, address, city, state, email, phone } = props;

  return (
    <section className='renderedSection'>
      <article className='infoArtc'>
        <span className='spanArtc'>Name: </span>
        {name}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>Address: </span>
        {address}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>City: </span>
        {city}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>State: </span>
        {state}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>Email: </span>
        {email}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>Phone: </span>
        {phone}
      </article>
    </section>
  );
};

export default DisplayGeneral;
