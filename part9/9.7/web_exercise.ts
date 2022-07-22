import express from 'express';
import bodyParser from "body-parser";
import {Convert} from "./exerciseVefify";
import calculateExHours from "../9.2/exercise";
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
const jsonParser = bodyParser.json();


app.post('/exercise',  jsonParser, function (req, res) {

    const exercises = Convert.toExercise(JSON.stringify(req.body));
    const target :number =(exercises.target);
    const hours :number[] = exercises.daily_exercises;

    res.json(calculateExHours(hours,target));
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});   