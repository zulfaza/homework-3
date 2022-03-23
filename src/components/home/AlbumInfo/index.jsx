import React from "react";

const AlbumInfo = ({ data }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={data.images[0].url}
          alt={data.name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={data.external_urls.spotify}>
              <span aria-hidden="true" className="absolute inset-0" />
              {data.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500 flex divide-gray-400 divide-x">
            {data.artists.map((artis) => (
              <a
                key={artis.id}
                href={artis.href}
                target="_blank"
                className="px-2 first:pl-0"
                rel="noopener noreferrer"
              >
                {artis.name}
              </a>
            ))}
          </p>
        </div>
        <div className="my-3">
          <button className="bg-blue-400 px-5 py-2 text-white w-full">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
