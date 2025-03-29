import { API_URL } from "../(home)/page";
import styles from "../styles/movie-videos.module.css";

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
    <div className={styles.container}>
      <div className={styles.header}>Videos</div>
      <div className={styles.video_box}>
        {videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        ))}
      </div>
  </div>
  )
}