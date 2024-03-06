const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.use(express.static('public'));

app.get('/download', async (req, res) => {
    try {
        const url = req.query.url;
        const info = await ytdl.getInfo(url);
        const formats = ytdl.filterFormats(info.formats, 'videoandaudio');
        res.json(formats);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Failed to fetch video information' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
