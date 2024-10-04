import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/FormAppointment.css';
import DepartamentService from "../services/departament.service";
import { useAppointment } from "../services/appointment.service";

const FormAppointment: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [departmentName, setDepartmentName] = useState('');
    const [appointmentDay, setAppointmentDay] = useState<Date | null>(null);
    const [appointmentTime, setAppointmentTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const generateHours = (): string[] => {
        const hours = [];
        for (let i = 0; i <= 24; i++) {
            const hour = i.toString().padStart(2, '0');
            hours.push(`${hour}:00`)
        }
        localStorage.setItem('hours', JSON.stringify(hours));
        return hours;
    }
    const hours = generateHours();

    const { saveAppointment } = useAppointment();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const appointmentData = {
            fullName,
            email,
            departament: departmentName,
            appointmentDay: appointmentDay ? appointmentDay.toISOString().split('T')[0] : '', 
            appointmentTime
        };

        await saveAppointment(appointmentData);

        setFullName('');
        setEmail('');
        setDepartmentName('');
        setAppointmentDay(null);
        setAppointmentTime('');
        setIsSubmitting(false);
    };


    return (
        <div className="container-form">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form-title">Book Appointment</h2>
                <div className="form-group">
                    <label className="form-label">Name*</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email*</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <DepartamentService>
                    {(departments, loading, error) => (
                        <div className="form-group">
                            <label className="form-label">Department*</label>
                            <select
                                className="form-select"
                                value={departmentName}
                                onChange={(e) => setDepartmentName(e.target.value)}
                                required 
                            >
                                <option value="">Please Select</option>
                                {loading && <option>Loading...</option>}
                                {error && <option>Error loading departments</option>}
                                {!loading && !error && departments.map(dept => (
                                    <option key={dept.id} value={dept.departament}>{dept.departament}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </DepartamentService>

                <div className="form-group">
                    <label className="form-label">Appointment Day*</label>
                    <div className="relative w-full"> 
                        <DatePicker
                            selected={appointmentDay}
                            onChange={(date) => setAppointmentDay(date)}
                            dateFormat="yyyy-MM-dd"
                            className="form-input block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholderText="Select a date"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Time*</label>
                    <select
                        className="form-select"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        required 
                    >
                        <option value="">Please Select Time</option>
                        {hours.map((hour, index) => (
                            <option key={index} value={hour}>
                                {hour}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="form-button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </button>
            </form>
        </div>
    );

};

export default FormAppointment;