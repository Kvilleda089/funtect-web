import React, { useEffect, useState } from "react";
import axios from "axios"; 
import { Department } from "../interface/Department";

interface DepartmentServiceProps {
    children: (departments: Department[], loading: boolean, error: Error | null) => React.ReactNode;
}

const DepartamentService: React.FC<DepartmentServiceProps> = ({ children }) => {
    const [departments, setDepartments] = useState<Department[]>([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const url = process.env.REACT_APP_FUNTECT_API+"/departaments";
                const response = await axios.get(url); 
                
                const data = response.data;

                
                if (Array.isArray(data.departaments)) {
                    localStorage.setItem('departaments', JSON.stringify(data.departaments));
                    setDepartments(data.departaments);
                } else {
                    console.error('Error: data.departaments no es un array', data.departaments);
                    setDepartments([]); 
                }
            } catch (error: any) {
                setError(error);
                console.error('Error fetching departments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <>
            {children(departments, loading, error)}
        </>
    );
};

export default DepartamentService;
