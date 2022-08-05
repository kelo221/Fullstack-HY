
import {OmittedPatient, Patient} from '../types';
import {omitFields, validatePatientObject} from "./functions/interfaceFunctions";
import patientDataJSON from "../../data/PatientData";

const addNewPatient = (req: { body: Patient; }, res: { send: (arg0: Patient) => void; sendStatus: (arg0: number) => void; }): Patient| undefined => {
    const tempObj: Patient = req.body;
    const objectWasValid  =  validatePatientObject(tempObj);

    console.log(tempObj);

    if (objectWasValid) {
        patientDataJSON.push((tempObj ));
        res.send(tempObj);
    } else {
        res.sendStatus(400);
    }


    return undefined;
};

const parseSensitiveData = (): OmittedPatient[] => {

    const data: Patient[] = patientDataJSON;
    const omitSSN = Object.keys(patientDataJSON[0]).filter(e => e !== 'ssn') as (keyof Patient)[];

    for (let i = 0; i < patientDataJSON.length; i++) {
        data[i] = omitFields(data[i], ...omitSSN);
    }

    return data as OmittedPatient[];
};

const addDiary = () => {
    return 200;
};

export default {
    addNewPatient,
    addDiary,
    parseSensitiveData
};
