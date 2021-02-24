import React from 'react';

const DisplayEducational = (props) => {
  const { school, address, dateFrom, dateTo } = props;

  return (
    <section className='renderedSection'>
      <article className='infoArtc'>
        <span className='spanArtc'>School: </span>
        {school}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>Address: </span>
        {address}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>From: </span>
        {dateFrom}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>To: </span>
        {dateTo}
      </article>
    </section>
  );
};

export default DisplayEducational;
