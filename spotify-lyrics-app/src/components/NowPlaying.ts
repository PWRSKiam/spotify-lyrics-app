import React, { useEffect, useState } from 'react';
import { SpotifyClient, GeniusClient } from '../api';

const NowPlaying: React.FC = () => {
    const [track, setTrack] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCurrentTrack = async () => {
            try {
                const spotifyClient = new SpotifyClient();
                const currentTrack = await spotifyClient.getCurrentTrack();
                setTrack(currentTrack);
            } catch (err) {
                setError('Failed to fetch current track');
            }
        };

        fetchCurrentTrack();
        const interval = setInterval(fetchCurrentTrack, 5000); // Refresh every 5 seconds

        return () => clearInterval(interval);
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!track) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Now Playing</h2>
            <p>{track.name} by {track.artists.map((artist: any) => artist.name).join(', ')}</p>
            <img src={track.album.images[0].url} alt={track.album.name} />
        </div>
    );
};

export default NowPlaying;