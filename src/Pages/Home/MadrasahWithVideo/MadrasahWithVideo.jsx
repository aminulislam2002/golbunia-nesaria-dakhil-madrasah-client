import { useRef, useState } from "react";
import video1 from "../../../assets/videos/video-1.mp4";

const VideoWithMadrasah = () => {
  const videoRefs = useRef([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  const videos = [
    { src: video1, title: " মহান বিজয় দিবস উপলক্ষে গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসায় অনুষ্ঠান" },
    { src: video1, title: " মহান বিজয় দিবস উপলক্ষে গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসায় অনুষ্ঠান" },
    { src: video1, title: " মহান বিজয় দিবস উপলক্ষে গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসায় অনুষ্ঠান" },
  ];

  const handleVideoPlay = (index) => {
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      // Pause the currently playing video if it's different from the new one
      videoRefs.current[currentPlayingIndex].pause();
    }
    setCurrentPlayingIndex(index);
  };

  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div className="md:col-span-1" key={index}>
            <div className="bg-gray-200 p-4 rounded-lg">
              <video
                title={video.title}
                width="100%"
                height="200"
                src={video.src}
                ref={(el) => (videoRefs.current[index] = el)}
                controls
                onPlay={() => handleVideoPlay(index)}
              />
              <h3 className="hover:underline hover:cursor-pointer hover:text-red-500 mt-2">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoWithMadrasah;
