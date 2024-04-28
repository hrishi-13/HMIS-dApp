import React, { createContext, useState, useContext } from 'react';

const DoctorDataContext = createContext();

export const useDoctorData = () => useContext(DoctorDataContext);

export const DoctorDataProvider = ({ children }) => {
  const [doctorData, setDoctorData] = useState({});

  return (
    <DoctorDataContext.Provider value={{ doctorData, setDoctorData }}>
      {children}
    </DoctorDataContext.Provider>
  );
};