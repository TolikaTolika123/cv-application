import React from 'react';
import './styles/index.scss';
import CV from './components/CV';
import CVOptions from './components/CVOptions';

function App() {
  return (
    <div className="App">
      <h1>CV</h1>
      <div className="cv__container">
        <CV />
        <CVOptions />
      </div>
    </div>
  );
}

export default App;
