import React, { createContext, useContext } from 'react';import axios from 'axios';
import { Appointment } from '../interface/appointment';



interface AppointmentServiceProps  {
    onAppointmentSaved: () => void;
    children: React.ReactNode;
};

const AppointmentContext = createContext<{ saveAppointment: (appointment: Appointment) => Promise<void> } | undefined>(undefined);

const AppointmentService: React.FC<AppointmentServiceProps> = ({ onAppointmentSaved, children }) => {
    const saveAppointment = async (appointment: Appointment) => {
        try {
            const url = process.env.REACT_APP_FUNTECT_API + "/book-appointments";
            const response = await axios.post(url, appointment);
            console.log('Appointment saved:', response.data);
            onAppointmentSaved(); 
        } catch (error) {
            console.error('Error saving appointment:', error);
        }
    };

    return (
        <AppointmentContext.Provider value={{ saveAppointment }}>
            {children} 
        </AppointmentContext.Provider>
    );
};

export const useAppointment = () => {
    const context = useContext(AppointmentContext);
    if (!context) {
        throw new Error('useAppointment must be used within an AppointmentService');
    }
    return context;
};

export default AppointmentService;