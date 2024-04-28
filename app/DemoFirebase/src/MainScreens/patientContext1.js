import React, { createContext, useContext, useState } from 'react';

const PatientContext = createContext();

export const usePatientData = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const addPatient = patient => {
    setPatients([...patients, patient]);
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientContext.Provider>
  );
};
