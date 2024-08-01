import React from 'react';
import { Description } from "../components/Description";
import { Navbar } from "../components/Navbar";
import './Home.css';
import { ImagesContainer } from '../components/ImagesContainer';

const Home = () => {
  return (
    <>
      
      <ImagesContainer />
      <Description />
    </>
  );
}

export default Home;
