import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [detail, setDetail] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser,detail,setDetail }}>
      {children}
    </UserContext.Provider>
  );
};
