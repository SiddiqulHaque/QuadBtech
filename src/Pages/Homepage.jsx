import React, { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import axios from "axios";
const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const temp = async () => {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setData(res.data);
    };
    temp();
  }, []);
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center w-full items-center md:flex-row">
        {data.map((d, i) => (
          <MovieCard info={d} />
        ))}
      </div>
    </>
  );
};
export default Homepage;
