import React, { Component } from 'react';
import cat from '../assets/images/cat.jpg';
import dog from '../assets/images/dog.png';
import dogs from '../assets/images/dogs.gif';
import whale from '../assets/images/whale.svg';

const App = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={cat} className="image-wrapper__image" alt="cat"/>
      </div>
      <div className="image-wrapper">
        <img src={dog} className="image-wrapper__image" alt="dog"/>
      </div>
      <div className="image-wrapper">
        <img src={dogs} className="image-wrapper__image" alt="dogs"/>
      </div>
      <div className="image-wrapper">
        <img src={whale} className="image-wrapper__image" alt="whale"/>
      </div>
    </div>
  );
}

export default App;
