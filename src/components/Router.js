import { useState } from 'react';

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard'); // Default path

  const navigate = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path); // Update browser history
  };

  return { currentPath, navigate };
};
