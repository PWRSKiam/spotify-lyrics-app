import axios from 'axios';

const GENIUS_API_URL = 'https://api.genius.com';
const ACCESS_TOKEN = 'GLTeyABI6w93pnELfkndPZbxJpFQsZcWCUmLYKB-XZsqruFnc0_SoLa7fSn8Kphr'; // Replace with your Genius API access token

export class GeniusClient {
    constructor() {
        this.client = axios.create({
            baseURL: GENIUS_API_URL,
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
    }

    async searchLyrics(trackTitle, artistName) {
        const query = `${trackTitle} ${artistName}`;
        const response = await this.client.get('/search', {
            params: { q: query }
        });
        return response.data.response.hits;
    }

    async getLyricsByTrackId(trackId) {
        const response = await this.client.get(`/songs/${trackId}`);
        const lyricsPath = response.data.response.song.path;
        return `https://genius.com${lyricsPath}`;
    }
}