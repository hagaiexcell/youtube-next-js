import { apiKey } from "@/constant";

export async function fetchVideo(id: string) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`);

  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const video = await response.json();
    return { data: video, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "An unknown error occurred." };
    }
  }
}

export async function fetchVideos(query: string) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`);

  url.searchParams.set("maxResults", "20");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const videos = await response.json();
    return { data: videos, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "An unknown error occurred." };
    }
  }
}
