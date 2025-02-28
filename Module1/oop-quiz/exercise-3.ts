export{}
class Doctor{
    id: number;
    name: string;
    fee: number;

    constructor(name: string, fee: number) {
        this.name = name;
        this.fee = fee;
    }
}

class GeneralPhysician extends Doctor{

    constructor(id: number, name: string, fee: number) {
        super(name, fee);
    }
}

class Specialist extends Doctor{
    specializations: string;
    
    constructor(id: number, name: string, specializations: string, fee: number) {
        super(name, fee);
        this.specializations = specializations;
    }
}

class Appointment{
    id: number;
    patient: string;
    doctor: Doctor;
    date: Date;
    status: 'Pending' | 'Completed' | 'Canceled';

    constructor(id: number, patient: string, doctor: Doctor, date: Date) {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.status = 'Pending';
    }
}

class Hospital{
    private doctors: Doctor[] = []

    addDoctor(doctor: Doctor){
        this.arrDoctors.push(doctor);
    }

    private arrDoctors: Doctor[] = [];

    private arrAppointments: { patient: string, id: number, bookingDate: Date, status: string }[] = [];

    bookAppointment(patient: string, id: number, bookingDate: Date, doctorId: number){
        let doctor = this.arrDoctors.find(doctor => doctor.id === doctorId);
        if(doctor){
            if(this.checkDuplicateAppointment(patient, bookingDate)){
                console.log("Appointment already exists");
            } else {
                this.arrAppointments.push({
                    patient: patient,
                    id: this.arrAppointments.length + 1,
                    bookingDate: bookingDate,
                    status: "Pending"
                });
            }
        } else {
            console.log("Doctor not found");
        }
    }

    checkDuplicateAppointment(patient: string, bookingDate: Date){
        if(this.arrAppointments.some(appointment => appointment.patient === patient && appointment.bookingDate.getTime() === bookingDate.getTime())){
            return true;
        } else {
            return false;
        }
    }

    listAppointments(){
        return this.arrAppointments;
    }

    completedAppointment(id: number){
        let appointment = this.arrAppointments.find(appointment => appointment.id === id);
        if(appointment){
            appointment.status = "Completed";
        }
    }

    cancelAppointment(id: number){
        let appointment = this.arrAppointments.find(appointment => appointment.id === id);
        if(appointment && appointment.status === "Pending"){
            appointment.status = "Canceled";
        } else{
            console.log("Appointment cannot be canceled");
        }
    }
}

const hospital = new Hospital();

hospital.addDoctor(new GeneralPhysician(1, "Dr. John", 100));
hospital.addDoctor(new Specialist(2, "Dr. Smith", "Cardiologist", 200));

hospital.bookAppointment("Alice", 1, new Date("2025-02-15"), 1);
hospital.bookAppointment("Alice", 1, new Date("2025-02-15"), 2);
hospital.completedAppointment(1);
console.log(hospital.listAppointments());