import  { useState } from 'react'
import Button from '../Button';
import MoviesSlider from './MoviesSlider';

const SliderButtons = (WrappedComponent) => {

  
  return (props) => {
    <>
      <div className="container">
        <Button label="left"/>
        <WrappedComponent {...props}/>
        <Button label="right"/>
      </div>
    </>
  
}
}

export default SliderButtons;
