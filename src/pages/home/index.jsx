import React from "react";
import SimpleSample from "./single-sample";

const Home = () => {
  const data = SimpleSample.album;
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
          Home
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          <div className='group relative'>
            <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
              <img
                src={data.images[0].url}
                alt={data.name}
                className='w-full h-full object-center object-cover lg:w-full lg:h-full'
              />
            </div>
            <div className='mt-4 flex flex-col'>
              <div>
                <h3 className='text-sm text-gray-700'>
                  <a href={data.href}>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {data.name}
                  </a>
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  {data.artists.map((artis) => (
                    <a
                      href={artis.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {artis.name}
                    </a>
                  ))}
                </p>
              </div>
              <div className='my-3'>
                <button className='bg-blue-400 px-5 py-2 text-white w-full'>
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
