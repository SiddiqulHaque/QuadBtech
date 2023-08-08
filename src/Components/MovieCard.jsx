import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
const MovieCard = ({ info }) => {
  // console.log(info)
  const navigate=useNavigate();
  // const [data,setData]=useState('');
  const data=useRef();
  const handleClick=async ()=>{
    const res=await axios.get(`https://api.tvmaze.com/shows/${info?.show?.id}`)
    data.current=res.data;
    const moviesData = data.current;
    console.log(data.current);
    navigate(`/${info.show.id}`,{state:{moviesData}});
  }
  
  // "https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg"
  return (
    <div className="w-full m-2 md:w-1/5 flex justify-center items-center flex-col md:m-3">
      <img
        src={info?.show?.image?.medium}
        className="w-3/5 sm:m-4 md:w-80 md:h-90"
        alt=""
      />
      <div className="text-white text-center">
        <h3>
          <span className="text-lg  font-semibold">Name</span> :{info.show.name}
        </h3>
        <div>
          <h4>
            <span className="text-lg  font-semibold">Type</span> :{" "}
            {info.show.type}
          </h4>
          <p>
            {" "}
            <span className="text-lg  font-semibold">Language</span> :{" "}
            {info.show.language}
          </p>
          <p>
            {" "}
            <span className="text-lg  font-semibold">Genre</span> :
            {info.show.genres[0]} {info.show.genres[1]}{" "}
          </p>
          <p>
            {" "}
            <span className="text-lg  font-semibold">Running time</span> :{" "}
            {info.show.runtime}
          </p>
          <p>
            {" "}
            <span className="text-lg  font-semibold">Status</span>  :
            {info.show.status}
          </p>
          {info.show.rating.average && (
            <span>
              {" "}
              <span className="text-lg  font-semibold">Rating</span> :
                {info.show.rating.average}
            </span>
          )}
        </div>
          <button onClick={handleClick} className=" bg-blue-400 px-4 py-2 my-2 rounded-md ">
            More Details
          </button>
      </div>
    </div>
  );
};

export default MovieCard;
