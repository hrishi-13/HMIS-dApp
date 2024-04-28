import React from 'react';

const PatientDetailsContext = React.createContext();

export const PatientDetailsProvider = PatientDetailsContext.Provider;
export const PatientDetailsConsumer = PatientDetailsContext.Consumer;

export default PatientDetailsContext;