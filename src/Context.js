import './App.scss';
import React from 'react'
import { createContext } from 'react'
import jsData from './data.json';
import { useState } from 'react';
export const MyContext = createContext(null);

function Context({children}) {

  const [data, setData] = useState(jsData);


  return (
    <MyContext.Provider value={{data}}>
      {children}
    </MyContext.Provider>
  )
}

export default Context