import React, {useEffect, useState} from "react";
import '../styles/FormAppointment.css';
import { Department } from "../interface/Department";

const FormAppointment: React.FC = () => {
    const [departments, setDepartments] = useState<Department[]>([]);;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/0b4c030a-a8f3-4b5e-bd04-dd3ce7968516');
                if (!response.ok) {
                    throw new Error('Lo sentimos, ocurrió un error. Vuelva a intentarlo.');
                }
                const data = await response.json();
                localStorage.setItem('departaments', JSON.stringify(data))
                setDepartments(data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartments();
    }, []);

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

    return (
        <div className="container-form">
            <form action="" className="form">
                <h2 className="form-title">Book Appointment</h2>
                <div className="form-group">
                    <label className="form-label" >Name*</label>
                    <input type="text" className="form-input" placeholder="Full Name" />
                </div>

                <div className="form-group">
                    <label className="form-label">Email*</label>
                    <input type="email" className="form-input" placeholder="example@gmail.com" />
                </div>

                <div className="form-group">
                    <label className="form-label">Department*</label>
                    <select className="form-select">
                        <option>Please Select</option>
                        {loading && <option>Loading...</option>}
                        {error && <option>Error loading departments</option>}
                        {!loading && !error && departments.map(dept => (
                            <option key={dept.id} value={dept.id}>{dept.departament}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Time*</label>
                    <select className="form-select">
                        <option>Please Select Time</option>
                        {hours.map((hour, index) => (
                            <option key={index} value={hour}>
                                {hour}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="form-button">Book Appointment</button>
            </form>
        </div>
    );

};

export default FormAppointment;