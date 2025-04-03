export function formatTrackInfo(track: any): string {
    return `${track.name} by ${track.artists.map((artist: any) => artist.name).join(', ')}`;
}

export function handleApiResponse(response: Response): Promise<any> {
    if (!response.ok) {
        return Promise.reject(new Error('Network response was not ok'));
    }
    return response.json();
}

export function extractTrackIdFromUrl(url: string): string | null {
    const match = url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
}