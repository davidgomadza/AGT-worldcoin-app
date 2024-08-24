'use client';

import { useRouter } from 'next/navigation';

export default function VideoPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/discount');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-bg">
      <div className="w-full max-w-xs"> {/* Narrow container for vertical video */}
        <div className="relative pt-[177.78%] mb-4"> {/* This gives a 9:16 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/6Pjw7uFmJDg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button className="btn btn-black text-white w-full max-w-xs" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}
