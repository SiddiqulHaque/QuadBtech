import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Components/Modal";

const Singleshow = () => {
  const location = useLocation();
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setData(location.state?.moviesData);
  }, []);
  return (
    <div className="w-full h-full justify-center items-center flex">
      <div className={`w-full ${open && "blur-sm"} flex justify-center items-center flex-col text-gray-100`}>
        <div className="w-full p-16 flex sm:flex-row gap-4 justify-center flex-col">
          <img src={data?.image.medium} className="" alt="" />
          <div className="px-4 justify-between flex flex-col">
            {console.log(data)}
            <div>
              <h1 className="text-3xl font-medium">{data?.name}</h1>
              <div>
                <span className="font-bold">Language : </span>
                {data?.language}
              </div>
              <div>
                <span className="font-bold">Genres : </span>
                {data?.genres[0]}, {data?.genres[1]}
              </div>
              <div>
                <span className="font-bold">Rating : </span>
                {data?.rating?.average}
              </div>
              <div>
                <span className="font-bold">Status : </span>
                {data?.status}
              </div>
            </div>
            <div className="sm:w-[60%] w-[90%]">
              <span className="font-bold">Summary : </span>
              <div>{data?.summary}</div>
            </div>
          </div>
        </div>
        <button
          className="px-4 py-2 bg-blue-700 w-fit rounded"
          onClick={() => setOpen(true)}
        >
          Book now
        </button>
      </div>
      {open && <Modal open={open} setOpen={setOpen} mname={data?.name} />}
    </div>
  );
};

export default Singleshow;
