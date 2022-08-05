import express from 'express';
import diagnosisService from "../services/diagnosisService";
const router = express.Router();

router.get('/diagnoses', (_req, res) => {
    console.log('someone pinged here');
    res.send(diagnosisService.getEntries());
});


router.get('/', (_req, res) => {
    res.send('Fetching all diaries!');
});

router.post('/', (_req, res) => {
    res.send('Saving a diary!');
});

export default router;