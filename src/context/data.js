import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState({ name: "ayush" });

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
