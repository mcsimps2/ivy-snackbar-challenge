import React, { useState, useCallback } from 'react';
import { useSnackbar } from './snackbar';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const createSnackbar = useSnackbar();

  const handleClick = useCallback(() => {
    createSnackbar(`I've been clicked ${counter + 1} times.`);
    setCounter(counter + 1);
  }, [counter, setCounter, createSnackbar]);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
