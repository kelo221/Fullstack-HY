export type Patient = {
    id:          string;
    name:        string;
    dateOfBirth: string;
    ssn?:         string;
    gender:      string;
    occupation:  string;
};


export type OmittedPatient = Omit <Patient, 'ssn'>;