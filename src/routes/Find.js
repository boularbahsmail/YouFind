import React from 'react';

// Components
import FindLocation from '../components/FindLocation/FindLocation';

const Find = () => {
  document.title = "YouFind - Search";
  return (
    <>
      <FindLocation />
    </>
  );
}

export default Find;
