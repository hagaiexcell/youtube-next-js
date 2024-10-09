import { fetchVideo } from "@/app/services/videoServices";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;

  const video = await fetchVideo(id);

  return {
    title: video.data.items[0].snippet.title,
  };
}

export default async function VideoDetail({ params }: { params: { id: string } }) {
  const videoSrc = `https://www.youtube.com/embed/${params.id}`;
  const { data, error } = await fetchVideo(params.id);
  return (
    <div className="container py-4">
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="w-full h-[600px] rounded-xl overflow-hidden">
            <iframe src={videoSrc} className="w-full h-full"></iframe>
          </div>
          <div className="flex flex-col gap-1 mt-6">
            <h2 className="font-bold text-lg">{data.items[0].snippet.title}</h2>
            <h4 className="font-bold text-sm">{data.items[0].snippet.channelTitle}</h4>
            <p className="text-slate-400 text-base">{data.items[0].snippet.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
