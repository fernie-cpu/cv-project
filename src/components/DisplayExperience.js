import React from 'react';

const DisplayExperience = (props) => {
  const { occupation, employer, dateFrom, dateTo, description } = props;

  return (
    <section className='renderedSection'>
      <article className='infoArtc'>
        <span className='spanArtc'>Occupation: </span>
        {occupation}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>Employer: </span>
        {employer}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>From: </span>
        {dateFrom}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>To: </span>
        {dateTo}
      </article>
      <article className='infoArtc'>
        <span className='spanArtc'>Description: </span>
        {description}
      </article>
    </section>
  );
};

export default DisplayExperience;
