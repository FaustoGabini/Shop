import { useReducer } from "react";
import { UiContext, uiReducer } from ".";
const UI_INITIAL_STATE = {
  isMenuOpen: false,
};

export const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "[UI] - Toggle Menu" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        // Metodos
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
