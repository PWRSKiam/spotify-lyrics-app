# Spotify Lyrics App

This application integrates with the Spotify Client API and the Genius API to display the currently playing track and its lyrics.

## Features

- Displays the currently playing track from Spotify.
- Fetches and shows the lyrics of the currently playing track using the Genius API.

## Project Structure

```
spotify-lyrics-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── api
│   │   ├── spotifyClient.ts  # Handles interactions with the Spotify API
│   │   ├── geniusClient.ts    # Manages requests to the Genius API for lyrics
│   │   └── index.ts          # Centralized access point for API interactions
│   ├── components
│   │   ├── NowPlaying.ts     # Displays currently playing track information
│   │   └── LyricsDisplay.ts   # Shows the lyrics of the currently playing track
│   └── utils
│       └── helpers.ts        # Utility functions for common tasks
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/spotify-lyrics-app.git
   ```
2. Navigate to the project directory:
   ```
   cd spotify-lyrics-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Set up your Spotify API credentials and Genius API credentials.
2. Update the configuration in `src/app.ts` with your API keys.
3. Run the application:
   ```
   npm start
   ```

## Contributing

Feel free to submit issues or pull requests to improve the application. 

## License

This project is licensed under the MIT License.