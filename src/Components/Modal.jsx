import React, { useState } from "react";

const Modal = ({open,setOpen,mname}) => {
    const [name,setName]=useState(mname)
    const [tickets,setTickets]=useState(1);
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="w-[40vw] h-[50vh] backdrop-blur-sm bg-slate-100 absolute top-32
     text-slate-800   ">
      <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col gap-y-3  items-center">
          <div className="flex justify-between ">
            <label id="Moviename" className="font-semibold ">Name : </label>
            <input type="text" name="" id="Moviename"  value={mname}  className=" py-1 outline-none px-2"/>
          </div>
          <div className="flex justify-between ">
            <label htmlFor="tickets" className="font-semibold ">Tickets : </label>
            <input type="number" name="" id="tickets" min="1" onChange={(e)=>setTickets(e.target.value)} value={tickets} className=" py-1 px-2 outline-none" />
          </div>
          <button className="px-2 py-1 mt-2 bg-blue-700 w-fit rounded text-gray-100">Book Now</button>
          <div className="absolute top-1 right-3 bg-slate-100  border border-slate-700 rounded-sm cursor-pointer px-1" onClick={()=>setOpen(false)}>X</div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
