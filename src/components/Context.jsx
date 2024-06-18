import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {

const [Admin,setAdmin]=useState(false)
const [student,setStudent]=useState(false)

  return (
    <Context.Provider value={{Admin,setAdmin,student,setStudent}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
