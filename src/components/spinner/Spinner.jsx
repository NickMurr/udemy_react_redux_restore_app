import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  const loading = 'Loading..';

  return <h1 className="text-center">{loading}</h1>;
};

export default Spinner;
