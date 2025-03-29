import { API_URL } from "../(movies)/movies/page";

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
  return <h6>{JSON.stringify(videos)}</h6>
}