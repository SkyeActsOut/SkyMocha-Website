import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Projects from './projects'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Header />

      <div className='project-flex'>
        <Projects technical={true} />
        <Projects technical={false} />
      </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
