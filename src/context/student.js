import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [student, setStudent] = useState({ name: "Ayush" });

  return (
    <StudentContext.Provider value={[student, setStudent]}>
      {props.children}
    </StudentContext.Provider>
  );
};
