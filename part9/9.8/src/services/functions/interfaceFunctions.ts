import {Patient, PatientGender} from "../../types";

export const omitFields = <T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> => keys.reduce((o, k) => (o[k] = obj[k], o), {} as Pick<T, K>);

export const validatePatientObject = (obj:Patient): boolean => {

    const testObject :Patient = {id:"",name:"",ssn:"",dateOfBirth:"",gender:PatientGender.Female,occupation:""};

    const fields = Object.keys(testObject);

    let checker = false;

    console.log(obj);

    //  Check for fields
    for (const field of fields) {
       checker = Object.prototype.hasOwnProperty.call(obj, field);
       if (!checker){
           return checker;
       }
    }


    //  Check for types
    Object.entries(obj).every(([ field , value]) =>{
        checker = (typeof value === 'string' || value as unknown instanceof String);
        if (field === "gender"){
            checker = (value==="male" || value === "female");
        }
        return checker;
    });

    return checker;
};

export const genUUID = () :string => {
    const charList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    const v :string[] = [];

    for(let i = 0; i < 36; ++i) {
        v[i] = charList[Math.floor(Math.random() * 16)];
    }
    
    v[8] = '-';
    v[13] = '-';
    v[18] = '-';
    v[23] = '-';



    return v.join("");
};