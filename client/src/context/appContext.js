import React, { useContext, useReducer } from 'react'
import { Display_Alert, Clear_Alert } from './action'
import reducer from './reducer'

const initalState = {
  isLoading: false,
  showAlert: false,
  showTrendTopics: false,
  alertText: '',
  alertType: '',
  showSidebar: false,
  numOfPages: 1,
  page: 1,
  search: '',
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <AppContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
