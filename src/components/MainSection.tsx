import React from "react";
import '../styles/MainSection.css'
import FormAppointment from "./FormAppointment";
import AppointmentService from "../services/appointment.service";

const MainSection: React.FC = () =>{
    const handleAppointmentSaved = () => {
        console.log("Appointment saved!");
    };
    return (
        <>
            <div className="container-sections w-full flex flex-col lg:flex-row justify-between">
                <div className="container-section-main py-40">
                    <section className="section-main">
                        <div className="container-text">
                            <h2>Help to reclaim you life and freedom</h2>
                            <p>We know how large objects will act, but things on a small scale.</p>
                            <button className="button-quote-now">Get Quote Now</button>
                            <button className="button-more">Learn More</button>
                        </div>
                    </section>
                </div>
    
                <div className="container-formAppointment py-10 lg:py-40 lg:mr-40">
                    <div className="formAppointment">
                        <AppointmentService onAppointmentSaved={handleAppointmentSaved}>
                            <FormAppointment />
                        </AppointmentService>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainSection;