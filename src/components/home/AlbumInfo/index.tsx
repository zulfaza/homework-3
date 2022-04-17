import { TrackType } from 'pages/home';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  data: TrackType;
  tracks: string[];
  setTracks: React.Dispatch<React.SetStateAction<string[]>>;
};

const AlbumInfo = ({ data, tracks, setTracks }: Props) => {
  const album = data.album;
  const handleSelectClick = (uri: string) => {
    if (tracks.includes(uri)) setTracks((prev) => prev.filter((inTrackUri) => inTrackUri !== uri));
    else setTracks((prev) => [...prev, uri]);
  };
  const url: string | null = 'alkdfjajsdl';

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
                {index !== arr.length - 1 && <span className="mr-1">,</span>}
              </span>
            ))}
          </p>
        </div>
        <div className="my-3">
          <button
            onClick={() => handleSelectClick(data.uri)}
            className={`${!tracks.includes(data.uri) ? 'bg-blue-400' : 'bg-red-500'} px-5 py-2 text-white w-full`}
          >
            {tracks.includes(data.uri) ? 'Deselect' : 'Select'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
