/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import createUseContext from 'constate'; // State Context Object Creator

// Custom hook that contains your state and actions
function useCounter() {
  const [tasks] = useState(0);
  return { tasks };
}

// Declare context state object to share the state with other components
export const useCounterContext = createUseContext(useCounter);
