import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnoses';
import patientRouter from  "./routes/patients";

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

const PORT = 3001;

app.use(cors(options));

app.use(express.json());

app.use('/api', diagnosisRouter);
app.use('/api', patientRouter);

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});