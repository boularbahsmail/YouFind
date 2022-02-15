import React from 'react';

// Components
import DetectLocation from '../components/DetectLocation/DetectLocation';

const Home = () => {
  document.title = "YouFind - Easily Find Your Direction";
  return (
    <>
    <DetectLocation />
    </>
  );
}

export default Home;
