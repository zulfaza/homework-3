import React from "react";

const AlbumInfo = ({ data, tracks, setTracks }) => {
  const album = data.album;

  const handleSelectClick = () => {
    if (tracks.includes(data.id))
      setTracks((prev) => prev.filter((id) => id !== data.id));
    else setTracks((prev) => [...prev, data.id]);
  };

  return (
    <div className="group relative h-full self-stretch">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={album.images[0].url}
          alt={data.name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex flex-col h-full">
        <div className="self-stretch">
          <h3 className="text-xl text-gray-700 truncate">
            <a href={data.external_urls.spotify}>{data.name}</a>
          </h3>
          <h6 className="text-xs text-opacity-75">
            <a href={album.external_urls.spotify}>{album.name}</a>
          </h6>
          <p className="mt-1 text-sm text-gray-500 flex items-start flex-wrap">
            {data.artists.map((artis, index, arr) => (
              <span key={artis.id}>
                <a
                  key={artis.id}
                  href={artis.external_urls.spotify}
                  target="_blank"
                  className=""
                  rel="noopener noreferrer"
                >
                  {artis.name}
                </a>
                {index !== arr.length - 1 && ","}
              </span>
            ))}
          </p>
        </div>
        <div className="my-3">
          <button
            onClick={handleSelectClick}
            className={`${
              !tracks.includes(data.id) ? "bg-blue-400" : "bg-red-500"
            } px-5 py-2 text-white w-full`}
          >
            {tracks.includes(data.id) ? "Deselect" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
