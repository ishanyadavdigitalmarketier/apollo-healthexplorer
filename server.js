const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace with your connection string, e.g., from MongoDB Atlas)
mongoose.connect('mongodb://localhost:27017/apolodb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Schema for consultation data
const consultationSchema = new mongoose.Schema({
    patientName: String,
    country: String,
    city: String,
    phone: String,
    age: Number,
    dob: Date,
    problem: String,
    submittedAt: { type: Date, default: Date.now }
});

const Consultation = mongoose.model('Consultation', consultationSchema);

// POST endpoint to save data
app.post('/api/save-consultation', async (req, res) => {
    try {
        const consultation = new Consultation(req.body);
        await consultation.save();
        res.json({ success: true, message: 'Data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error saving data' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});