const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Sermon = require('../../models/Sermon');

const router = express.Router();

// Get all sermons in descending order
// GET /api/sermon?page=1&limit=6
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;

        const skip = (page - 1) * limit;

        const [sermons, total] = await Promise.all([
            Sermon.find().sort({ date: -1 }).skip(skip).limit(limit),
            Sermon.countDocuments()
        ]);

        res.json({
            sermons,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch sermons' });
    }
});

// Create a new sermons
router.post('/', async(req, res) => {
    const { title, date, scripture, speaker, videoLink } = req.body;
    if(!title || !date || !videoLink){
        return res.status(400).json({ error: 'Missing required fields '});
    }

    try {
        const newSermon = new Sermon({ title, date, scripture, speaker, videoLink })
        await newSermon.save();
        res.status(201).json(newSermon);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error creating sermon' })
    }
})

// Update sermon
router.put('/:id', async (req, res) => {
    try{
        const { title, date, scripture, speaker, videoLink } = req.body;

        const sermon = await Sermon.findOne({ _id: req.params.id });
        if(!sermon) return res.status(404).json({ error: 'Sermon not found' });

        if (title) sermon.title = title;
        if (date) sermon.date = date;
        if (scripture) sermon.scripture = scripture;
        if (speaker) sermon.speaker = speaker;
        if (videoLink) sermon.videoLink = videoLink

        await sermon.save();
        res.status(200).json({ message: 'Sermon updated', sermon });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error:'Failed to update gallery' });
    }
});

// Get the latest sermon
// Get the most recent sermon
router.get('/latest', async (req, res) => {
    try {
        const latestSermon = await Sermon.findOne().sort({ date: -1 });
        if (!latestSermon) {
            return res.status(404).json({ error: 'No sermons found' });
        }
        res.json(latestSermon);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch latest sermon' });
    }
});

router.get('/all', async (req, res) => {
    try {
      const sermons = await Sermon.find().sort({ date: -1 });
      res.json(sermons);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch all sermons' });
    }
});  

module.exports = router;