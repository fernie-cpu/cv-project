import React from 'react';
import './style/style.css';
import ReactToPdf from 'react-to-pdf';
import Header from './components/Header';
import General from './components/General';
import Educational from './components/Educational';
import Experience from './components/Experience';

const ref = React.createRef();

function App() {
  return (
    <div>
      <Header />
      <ReactToPdf targetRef={ref} filename='div-blue.pdf'>
        {({ toPdf }) => (
          <div className='pdfDiv'>
            <p>Click here to download your resume when you're finished -> </p>
            <button className='pdfBtn' onClick={toPdf}>
              Generate pdf
            </button>
          </div>
        )}
      </ReactToPdf>
      <div ref={ref}>
        <General />
        <Educational />
        <Experience />
      </div>
    </div>
  );
}

export default App;
