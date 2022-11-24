import { useCallback } from 'react';

export const useSnackbar = () => {
  const createSnackbar = useCallback((message) => {
    console.log(message);
  }, []);

  return createSnackbar;
};
