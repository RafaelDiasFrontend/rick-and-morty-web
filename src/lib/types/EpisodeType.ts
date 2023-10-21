interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[]; // Assuming these are URLs to character profiles
  url: string; // URL to the episode's own endpoint
  created: string; // Timestamp of episode creation
}
