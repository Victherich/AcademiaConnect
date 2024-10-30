import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

const ContextProvider = ({children}) => {

const [Admin,setAdmin]=useState(false)
const [student,setStudent]=useState(false)
const [teacher,setTeacher]=useState(false)
const check = ''

  return (
    <Context.Provider value={{Admin,setAdmin,student,setStudent,teacher,setTeacher}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
