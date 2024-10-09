import VideoList from "@/components/videos/VideoList";

import { fetchVideos } from "../services/videoServices";

export default async function Videos({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { data, error } = await fetchVideos(searchParams.query);

  return (
    <div className="container pb-4">
      <div className="mt-8">{error ? <div>{error}</div> : <VideoList videos={data.items} />}</div>
    </div>
  );
}
