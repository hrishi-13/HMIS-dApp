import React, { createContext, useContext, useState } from 'react';

const DoctorContext = createContext();

export const useDoctorContext = () => useContext(DoctorContext);

export const DoctorProvider = ({ children }) => {
  const [grantedDoctors, setGrantedDoctors] = useState([]);

  const grantAccess = (doctorId) => {
    if (!grantedDoctors.includes(doctorId)) {
      const newGranted = [...grantedDoctors, doctorId];
      setGrantedDoctors(newGranted);
      console.log("Granted Access to:", newGranted);
    }
  };

  const revokeAccess = (doctorId) => {
    const newGranted = grantedDoctors.filter(id => id !== doctorId);
    setGrantedDoctors(newGranted);
    console.log("Revoked Access from:", newGranted);
  };

  return (
    <DoctorContext.Provider value={{ grantedDoctors, grantAccess, revokeAccess }}>
      {children}
    </DoctorContext.Provider>
  );
};
