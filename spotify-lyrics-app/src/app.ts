import express from 'express';
import { SpotifyClient } from './api/spotifyClient';
import { GeniusClient } from './api/geniusClient';
import { NowPlaying } from './components/NowPlaying';
import { LyricsDisplay } from './components/LyricsDisplay';

const app = express();
const port = process.env.PORT || 3000;

const spotifyClient = new SpotifyClient();
const geniusClient = new GeniusClient();

app.use(express.json());

app.get('/now-playing', async (req, res) => {
    try {
        const track = await spotifyClient.getCurrentTrack();
        const lyrics = await geniusClient.searchLyrics(track.title, track.artist);
        res.json({ track, lyrics });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch now playing information.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});