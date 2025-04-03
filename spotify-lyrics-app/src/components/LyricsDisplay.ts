import React, { useEffect, useState } from 'react';
import { GeniusClient } from '../api/geniusClient';
import { SpotifyClient } from '../api/spotifyClient';

const LyricsDisplay: React.FC = () => {
    const [lyrics, setLyrics] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLyrics = async () => {
            try {
                const spotifyClient = new SpotifyClient();
                const geniusClient = new GeniusClient();

                const currentTrack = await spotifyClient.getCurrentTrack();
                if (currentTrack) {
                    const trackId = currentTrack.id; // Assuming the track ID is available
                    const lyricsData = await geniusClient.getLyricsByTrackId(trackId);
                    setLyrics(lyricsData);
                } else {
                    setError('No track is currently playing.');
                }
            } catch (err) {
                setError('Failed to fetch lyrics.');
            }
        };

        fetchLyrics();
        const interval = setInterval(fetchLyrics, 10000); // Refresh lyrics every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <pre>{lyrics ? lyrics : 'Loading lyrics...'}</pre>
            )}
        </div>
    );
};

export default LyricsDisplay;