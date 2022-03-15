import { createContext, useState } from "react";
import { useContext } from "react";
import { utils } from "../utils";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState(utils.initialState);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

const Global = {
  Provider: Provider,
};

const useGlobal = () => useContext(Context);

export { Global, useGlobal };
