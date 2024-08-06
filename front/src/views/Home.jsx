import React from 'react';
import { Description } from "../components/Description";
import './Home.css';
import { ImagesContainer } from '../components/ImagesContainer';
import { Register } from './Register';

const Home = () => {
  return (
    <>
      
      <ImagesContainer />
      <Description />
      <Register/>
    </>
  );
}

export default Home;
