export const calculateBmi = (height: number, weight: number) : string => {
    const BMI:number = weight/((height/100)**2)
    console.log(BMI)

    if (BMI<18.5){
        return "underweight"
    }else if (BMI>25){
        return "overweight"
    }else{
        return "normal weight"
    }

}
const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
console.log(calculateBmi(height, weight))

