import express from 'express';
import patientService from "../services/patientService";
const router = express.Router();

router.get('/patients', (_req, res) => {
    console.log('someone pinged here');
    res.send(patientService.parseSensitiveData());
});

router.post('/patients', (req, res) => {
    console.log('someone pinged here2');
    res.send(patientService.addNewPatient(req,res));
});



router.get('/', (_req, res) => {
    res.send('Fetching all diaries!');
});

router.post('/', (_req, res) => {
    res.send('Saving a diary!');
});

export default router;