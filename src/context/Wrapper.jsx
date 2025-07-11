import React, { createContext, useContext } from 'react'

export const DataContext = createContext()

export const Wrapper = ({children}) => {
  console.log(children);
  return (
    <DataContext.Provider value={{}}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)