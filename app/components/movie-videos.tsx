import { API_URL } from "../constants";

async function getVideos(id:string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // console.log(`Fetching videos: ${Date.now()}`);
  // 애러 고의발생
  // throw new Error("Failed to fetch data"); 

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({id}: {id:string}) {
  const videos = await getVideos(id);
  return (
    <div className="flex justify-center text-white pt-12">
      <div className="w-400">
        <div className="text-3xl pb-4">Videos</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {videos.map((video) => (
              <div className="m-1">
                {/* <iframe
                  key={video.id}
                  src={`https://youtube.com/embed/${video.key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.name}
                /> */}

                <iframe 
                  // width="2545" height="1102" 
                  src={`https://youtube.com/embed/${video.key}`}
                  title={video.name}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" />
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}