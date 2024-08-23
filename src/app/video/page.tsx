// pages/video.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function VideoPage() {
    const router = useRouter();

    const handleContinue = () => {
        router.push('/discount'); // Replace with the actual route you want to navigate to
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen p-4 bg-bg">
            <div className="w-full max-w-md">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/6Pjw7uFmJDg"
                        title="YouTube video player"                        
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <button className="btn btn-black text-white w-full max-w-md" onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
}
