import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: () => setState({ isOpen: true }),
        onClose: () => setState({ isOpen: false }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);

// console.log(useAlertContext)
