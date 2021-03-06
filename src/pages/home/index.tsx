import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorProps } from 'redux/store';
import AlbumInfo from 'components/home/AlbumInfo';
import formatParameter from 'utils/formatParameter';
import ModalCreatePlaylist from './modal-create-playlist';
// import albums from "./albums";

export interface TrackType {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: TrackTypeType;
  uri: string;
}

export interface Album {
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ArtistType {
  Artist = 'artist',
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export enum ReleaseDatePrecision {
  Day = 'day',
}

export interface ExternalIDS {
  isrc: string;
}

export enum TrackTypeType {
  Track = 'track',
}

const Home = () => {
  const accessToken = useSelector((state: selectorProps) => state.spotify.accessToken);
  const [Albums, setAlbums] = useState<TrackType[]>([]);
  const [Keyword, setKeyword] = useState<string | null>(null);
  const [SelectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [ShowCreatePlaylist, setShowCreatePlaylist] = useState(false);
  const [Success, setSuccess] = useState(null);

  const Search = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Authorization = `Bearer ${accessToken}`;
    fetch(
      `https://api.spotify.com/v1/search?${formatParameter({
        q: Keyword,
        type: 'track',
      })}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setAlbums(res.tracks.items);
      });
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Home</h2>
        {Success && <div className="px-4 py-2 rounded w-full text-black bg-green-500">{Success}</div>}
        <form onSubmit={Search} className="my-4 flex gap-3">
          <input onChange={(e) => setKeyword(e.target.value)} className="w-full border px-2 py-3" type="text" />
          <button className="bg-blue-500 px-4 py-2 text-white rounded">Search</button>
        </form>
        <button
          disabled={SelectedTracks.length < 1}
          onClick={() => setShowCreatePlaylist(true)}
          className="bg-blue-500 disabled:opacity-50 px-4 py-2 text-white rounded"
        >
          Buat Playlist
        </button>
        <ModalCreatePlaylist
          tracks={SelectedTracks}
          isOpen={ShowCreatePlaylist}
          setIsOpen={setShowCreatePlaylist}
          accessToken={accessToken}
          setSuccess={setSuccess}
        />
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Albums.map((data) => (
            <AlbumInfo tracks={SelectedTracks} setTracks={setSelectedTracks} key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
