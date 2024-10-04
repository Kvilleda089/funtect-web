import { Appointment } from "./appointment";

export interface ContactData extends Appointment{
    message: string;
}