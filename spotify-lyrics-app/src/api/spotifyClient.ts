import axios from 'axios';

class SpotifyClient {
    private accessToken: string | null = null;

    constructor(private clientId: string, private clientSecret: string) {}

    async authenticate(): Promise<void> {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64'),
            },
            params: {
                grant_type: 'client_credentials',
            },
        });
        this.accessToken = response.data.access_token;
    }

    async getCurrentTrack(): Promise<any> {
        if (!this.accessToken) {
            throw new Error('Spotify client is not authenticated');
        }

        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        return response.data;
    }

    async getTrackDetails(trackId: string): Promise<any> {
        if (!this.accessToken) {
            throw new Error('Spotify client is not authenticated');
        }

        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        return response.data;
    }
}

export default SpotifyClient;