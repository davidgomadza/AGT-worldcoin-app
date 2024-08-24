"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Advertisement: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const choice = searchParams.get('choice');

    const handleWatchAd = () => {
        router.push(`/video?choice=${choice}`);
    };

    return (
        <Suspense>
            <div className="flex flex-col justify-center items-center h-screen bg-bg text-center">
                <h1 className="text-2xl font-bold mb-8 text-black">
                    Watch an advertisement to get a discount at Adidas Shop
                </h1>
                <button className="btn btn-black text-white w-64" onClick={handleWatchAd}>
                    Yes
                </button>
            </div>
        </Suspense>
    );
};

export default Advertisement;
