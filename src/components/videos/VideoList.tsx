import { YoutubeSearchResult } from "@/app/types/videoTypes";
import VideoItem from "./VideoItem";

export default function VideoList({ videos }: { videos?: YoutubeSearchResult[] }) {
  if (!Array.isArray(videos) || videos.length === 0) {
    return <div className="text-red-500">No videos found.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-5">
      {videos?.map((vid) => {
        return (
          <div key={vid.id.videoId}>
            <VideoItem video={vid} />
          </div>
        );
      })}
    </div>
  );
}
