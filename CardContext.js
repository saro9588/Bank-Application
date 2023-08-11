import { createContext, useState } from 'react';
import React from 'react';

export const CardContext = createContext();

export function CardProvider({ children }) {
  const [balance, setBalance] = useState(0);

  const deposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const withdraw = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  return (
    <CardContext.Provider value={{users: [], balance, deposit, withdraw }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;

