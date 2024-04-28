import React, { createContext, useState, useContext } from 'react';

const PatientDataContext = createContext();

export const usePatientData = () => useContext(PatientDataContext);

export const PatientDataProvider = ({ children }) => {
  const [patientData, setPatientData] = useState({});

  return (
    <PatientDataContext.Provider value={{ patientData, setPatientData }}>
      {children}
    </PatientDataContext.Provider>
  );
};