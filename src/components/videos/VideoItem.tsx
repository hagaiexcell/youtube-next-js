import { YoutubeSearchResult } from "@/app/types/videoTypes";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function VideoItem({ video }: { video: YoutubeSearchResult }) {
  return (
    <Card className=" h-full shadow-none border-none">
      <CardContent className="p-0">
        <Link href={`/videos/${video.id.videoId}`}>
          <Image width={500} height={100} alt="" className="w-full rounded-md" src={video.snippet.thumbnails.medium.url} />
        </Link>
      </CardContent>
      <CardFooter className="p-1 pt-3">
        <div className="flex flex-col gap-1 w-full">
          <h4 className="font-bold text-lg leading-tight line-clamp-2 w-11/12">{video.snippet.title}</h4>
          <h2 className="font-light text-slate-500 text-sm">{video.snippet.channelTitle}</h2>
        </div>
      </CardFooter>
    </Card>
  );
}
