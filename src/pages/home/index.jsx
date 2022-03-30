import React, { useState } from "react";
import AlbumInfo from "../../components/home/AlbumInfo";
import formatParameter from "../../utils/formatParameter";
// import albums from "./albums";

const Home = ({ accessToken }) => {
  const [Albums, setAlbums] = useState([]);
  const [Keyword, setKeyword] = useState(null);
  const [SelectedTracks, setSelectedTracks] = useState([]);

  const Search = async (e) => {
    e.preventDefault();
    const Authorization = `Bearer ${accessToken}`;
    fetch(
      `https://api.spotify.com/v1/search?${formatParameter({
        q: Keyword,
        type: "track",
      })}`,
      {
        headers: {
          "Content-Type": "application/json",
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
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Home
        </h2>
        <form onSubmit={Search} className="my-4 flex gap-3">
          <input
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full border px-2 py-3"
            type="text"
          />
          <button className="bg-blue-500 px-4 py-2 text-white rounded">
            Search
          </button>
        </form>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Albums.map((data) => (
            <AlbumInfo
              tracks={SelectedTracks}
              setTracks={setSelectedTracks}
              key={data.id}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
