export interface trainingStuff {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: string,
    ratingDescription: string,
    target: number,
    average: number,
}
const calculateExHours = function (hours: number[], avgGoal: number): trainingStuff {

    if (hours.length ===0){
        return {
            average: 0,
            periodLength: 0,
            rating: "",
            ratingDescription: "",
            success: false,
            target: 0,
            trainingDays: 0
        };
    }

    const sum = hours.reduce((a, b) => a + b);
    const avg = sum / hours.length;
    const rating = String((100 * (sum / (avgGoal * 7))).toFixed(2) + '%');
    let ratingDesc: string;

    if (Math.round(avg) === avgGoal && avg < avgGoal) {
        ratingDesc = "You did not quite reach your goals.";
    } else if (avg < avgGoal) {
        ratingDesc = "Goals were not reached";
    } else {
        ratingDesc = "Goals reached!";
    }

    const trainingDays = hours.filter(function (a) {
        return a != 0;
    });

    return {
        periodLength: hours.length,
        trainingDays: trainingDays.length,
        success: (avg >= avgGoal),
        ratingDescription: ratingDesc,
        target: avgGoal,
        rating: rating,
        average: avg,

    };
};

export default calculateExHours;

const days :string[] = ((process.argv.slice(3, 12)));
const daysParsed :number[] = days.map(Number);
const goal  = Number(process.argv[2]);