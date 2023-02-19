export class Appointment {
    id: number
    public day: string
    public timeHour: string
    public timeMinutes: string
    public doctor: string
    public patient: string


constructor(id:number, day: string, timeHour:string, timeMinutes:string, doctor: string, patient:string) {
        this.id=id
        this.day=day
        this.timeHour=timeHour
        this.timeMinutes=timeMinutes
        this.doctor=doctor
        this.patient=patient
    }
  
}