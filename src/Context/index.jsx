
import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) =>{
  const [name, setName] = useState('guillaume');

  return(
    <AppContext.Provider value={{name, setName}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;