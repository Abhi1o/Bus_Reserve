import React, { useState } from 'react';
const Home = () => {

  const [from,setFrom]=useState("");
  const [to,setTo]= useState("");
  const [date,setDate]=useState("");

  const handleOnSearch =() =>{
    console.log(`from ${from}, to ${to}, date ${date}`)
    setDate("")
    setTo("")
    setFrom("")
  }

  return (
    <div className=''>
      <div>
        <h1 className=' text-center font-extrabold text-4xl my-12 text-gray-900'>Book Your Seat</h1>
      </div>
    <div className="mt-10 sm:mt-20 md:my-24 flex flex-col items-center justify-center p-5 border bg-gray-200 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mt-9 ">

        <div className="h-20 border shadow-lg border-gray-300 bg-gray-100/100 rounded-md px-3 py-1">
          <label htmlFor="from">From</label><br />
          <input id="from" value={from} type="search" placeholder="Jaipur" className="mt-2 px-3 w-full py-1 rounded-md border" onChange={(e) => setFrom(e.target.value)} />
        </div>

        <div className="h-20 border shadow-lg border-gray-300 bg-gray-100/100 rounded-md px-3 py-1">
          <label htmlFor="to">To</label><br />
          <input id="to" value={to} type="search" placeholder="Jaipur" className="mt-2 px-3 w-full py-1 rounded-md border" onChange={(e) => setTo(e.target.value)}/>
        </div>

        <div className="h-20 border shadow-lg border-gray-300 bg-gray-100/100 rounded-md px-3 py-1 ">
          <label htmlFor="date">Date</label><br />
          <input id="date" value={date} className="mt-2 px-3 w-full py-1 rounded-md border" type="date" onChange={(e) => setDate(e.target.value)}/>
        </div>

      </div>

      <div className='max-w-full'>
        <button disabled={!to && !from && !date} className="py-2 px-16  mt-10 mb-8 border bg-blue-400 hover:bg-blue-500 text-lg font-bold text-white rounded-md " onClick={handleOnSearch} >Search</button>
      </div>

    </div>
    </div>
  );
};

export default Home;
