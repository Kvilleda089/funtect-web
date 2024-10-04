import axios from "axios";
import { ContactData } from "../interface/contact-data";


export const sendContactEmail = async (data: ContactData) => {
    try {
        const url = process.env.REACT_APP_FUNTECT_API+"/contact-us"
        const response = await axios.post(url, data);
        return response.data; 
    } catch (error) {
        console.error('Error al enviar datos de contacto:', error);
        throw error; 
    }
};