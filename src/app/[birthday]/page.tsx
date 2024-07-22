'use client';

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';

const Page = ({ params }: { params: { slug: string } }) => {
  
  const router = useSearchParams()
  const loverName = router.get('name')
  const message = loverName

  const [isLoaded, setIsLoaded] = useState(false);
  const [isHeartbeat, setIsHeartbeat] = useState(false);


  useEffect(() => {
    setIsLoaded(true);

    const timeout = setTimeout(() => {
      setIsHeartbeat(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  fixed top-0 bottom-0 right-0 left-0 z-10 justify-center items-center`}>
      <h2 className="text-2xl font-bold mb-4">Love Message</h2>
      <p className={`text-gray-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-opacity duration-1000 flex`}>
        Dear
        <span 
          className='font-bold pl-1'
        >
          {` ${ message}`}
        </span>
        , I love you more each day! 
        <span className={`text-red-600 animate-pulse`}>
          💖
        </span>
      </p>
    </div>
  );
};

export default Page;
