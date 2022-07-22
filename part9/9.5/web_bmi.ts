import express from 'express';
import {calculateBmi} from "../9.1/bmi";
const app = express();

app.get('/bmi', (req, res) => {

    const weight:number = parseInt(req.query.weight as string);
    const height:number = parseInt(req.query.height as string);

    if (!weight || !height){
        res.json({ error: "malformatted parameters"});
        return;
    }

    const bmi :string= calculateBmi(height,weight);
    res.json({weight:weight,height:height,bmi:bmi});
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});