import React, { useEffect, useState } from "react";
import backgroundImage from '../img/fondo-contac-us.jpg'
import { Department } from "../interface/Department";

const ContactSection: React.FC = () => {
    const [departments, setDepartament] = useState<Department[]>([]);
    const [hours, setHours] = useState<string[]>([]);

    useEffect(() => {
        const storeDepartament = localStorage.getItem("departaments");
        const storeHours = localStorage.getItem('hours');
        if (storeDepartament && storeHours) {
            setDepartament(JSON.parse(storeDepartament));
            setHours(JSON.parse(storeHours));
        }

    }, []);

    return (
        <>
            <div className="container-section relative flex flex-col lg:flex-row p-6 items-start w-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'right', backgroundSize: 'cover' }}>
                <div className="absolute inset-0 bg-gray-400 opacity-60"></div>
                <div className="container-contact flex-1 lg:mr-6 relative z-10">
                    <div className="text-left ml-4 lg:ml-40 pt-20 pb-10">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <h1 className="text-3xl font-bold mb-4">Make An Appointment</h1>
                    </div>
                    <div className="w-full lg:w-extra-wide ml-0 lg:ml-custom-left">
                        <form className="space-y-4">
                            <div className="flex flex-col lg:flex-row lg:space-x-4">
                                <input
                                    type="text"
                                    className="form-input flex-1 mb-4 lg:mb-0 text-lg py-3 w-full rounded-borderInput"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="email"
                                    className="form-input flex-1 text-lg py-3 w-full rounded-borderInput"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-4">
                                <select className="form-select flex-1 mb-4 lg:mb-0 text-lg py-3 w-full rounded-borderInput">
                                    <option>Please Select</option>
                                    {departments.map(department => (
                                        <option key={department.id} value={department.id}>
                                            {department.departament}
                                        </option>
                                    ))}
                                </select>
                                <select className="form-select flex-1 text-lg py-3 w-full rounded-borderInput">
                                    <option>Please Select Time</option>
                                    {hours.map((hour, index) => (
                                        <option key={index} value={hour}>
                                            {hour}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <textarea
                                    className="form-input w-full h-40 text-lg py-3 rounded-borderInput"
                                    placeholder="Message"
                                />
                            </div>

                            <div className="flex pt-10 pb-10">
                                <button className="btn-primary py-5 px-10 text-xl bg-button rounded-borderInput text-white">Book Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-consultation w-full p-6 bg-white">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="container-information text-left lg:ml-40 pt-10 pb-10">
                        <h1 className="text-3xl font-bold">Request A Free Consultation</h1>
                        <p className="text-gray-600 text-xl">the quick fox jumps over the lazy dog</p>
                    </div>
                    <div className="flex-shrink-0 mt-6 lg:mt-0">
                        <button className="btn-primary py-5 px-10 text-xl bg-button rounded-borderInput text-white">Contact Us</button>
                    </div>
                </div>
            </div>

        </>
    );

}

export default ContactSection;