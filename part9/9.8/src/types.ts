export enum PatientGender {
    Female="female",
    Male="male",
}

export type Patient = {
    id:          string;
    name:        string;
    dateOfBirth: string;
    ssn?:         string;
    gender:      PatientGender;
    occupation:  string;
};


export type OmittedPatient = Omit <Patient, 'ssn'>;