import { SpotifyClient } from './spotifyClient';
import { GeniusClient } from './geniusClient';

const spotifyClient = new SpotifyClient();
const geniusClient = new GeniusClient();

export { spotifyClient, geniusClient };