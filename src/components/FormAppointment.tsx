import React from "react";
import '../styles/FormAppointment.css';
const FormAppointment: React.FC = () => {
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
                    <input type= "email" className="form-input" placeholder="example@gmail.com" />
                </div>
                
                <div className="form-group">
                    <label className="form-label">Department*</label>
                    <select className="form-select">
                        <option>Please Select</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Time*</label>
                    <select className="form-select">
                        <option>4:00 Available</option>
                    </select>
                </div>
                <button className="form-button">Book Appointment</button>
            </form>
        </div>
    );

};

export default FormAppointment;