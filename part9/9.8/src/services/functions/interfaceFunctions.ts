import {Patient} from "../../types";

export function omitFields<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
    return keys.reduce((o, k) => (o[k] = obj[k], o), {} as Pick<T, K>);
}

export function validatePatientObject(obj:Patient): boolean{

    const testObject :Patient = {id:"",name:"",ssn:"",dateOfBirth:"",gender:"",occupation:""};

    const fields = Object.keys(testObject);

    let checker = false;

    for (const field of fields) {
       checker = Object.prototype.hasOwnProperty.call(obj, field);
       if (!checker){
           break;
       }
    }


    return checker;
}