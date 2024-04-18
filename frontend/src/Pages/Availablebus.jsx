import React, { useState } from "react";

const Availablebus = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState([]);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [rating, setRating] = useState("");
  const [operator,setOperator] =useState ("");

  const handleClearAll = () => {
    setArrival(" ");
    setDeparture(" ");
    setPickup(" ");
    setDrop(" ");
    setRating(" ");
    setOperator(" ");
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedArrival = [...arrival];

    if (checked) {
      updatedArrival.push(name);
    } else {
      updatedArrival.splice(updatedArrival.indexOf(name), 1);
    }
    setArrival(updatedArrival);
  };

  return (
    <div className="sm:px-12 md:px-32 mt-20 grid grid-cols-4 gap-12 gap">
      <div className=" col-start-1 col-span-1">
        <div className="border rounded-lg flex flex-row items-center justify-between text-black font-semibold py-2 px-4">
          <h3 className="">Filter</h3>
          <button onClick={handleClearAll}>Clear All</button>
        </div>

        {/* filter left box */}
        <div className="border rounded-lg flex flex-col justify-center text-black font-semibold py-2 px-4 my-5">
          <div className="font-normal flex flex-col ">
            <h3 className="font-medium mb-1">Departure Time</h3>
            {["Morning Session", "Afternoon Session", "Evening Session"].map(
              (option) => (
                <label className="my-1 ">
                  <input
                    type="checkbox"
                    name="departure"
                    className="mr-2"
                    checked={departure.includes(option)}
                    value={option}
                    onClick={(e) => setDeparture(e.target.value)}
                  />
                  {option}
                </label>
              )
            )}
          </div>

          <hr className="my-3" />
          {/* Arrival Time filter */}
          <div className="font-normal flex flex-col ">
            <h3 className="font-medium mb-1">Arrival Time </h3>
            {["Morning Session", "Afternoon Session", "Evening Session"].map(
              (option) => (
                <label className="my-1 ">
                  <input
                    type="checkbox"
                    name={option}
                    className="mr-2"
                    checked={arrival.includes(option)}
                    value={option}
                    onClick={handleCheckboxChange}
                  />
                  {option}
                </label>
              )
            )}
          </div>

          <hr className="my-3" />
          {/* Pickup Point filter*/}
          <div className="font-normal flex flex-col ">
            <h3 className="font-medium mb-1">Pickup Point </h3>
            {["Mumbai", "Bangalore", "Hyderabad"].map((option) => (
              <label className="my-1 ">
                <input
                  type="radio"
                  name="Pickup"
                  className="mr-2"
                  checked={pickup.includes(option)}
                  value={option}
                  onClick={(e) => setPickup(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>

          <hr className="my-3" />
          {/* drop point filter  */}
          <div className="font-normal flex flex-col ">
            <h3 className="font-medium mb-1">Drop Point </h3>
            {["Mumbai", "Bangalore", "Hyderabad"].map((option) => (
              <label className="my-1 ">
                <input
                  type="radio"
                  name="drop"
                  className="mr-2"
                  checked={drop.includes(option)}
                  value={option}
                  onClick={(e) => setDrop(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>

          <hr className="my-3" />
          <div className="flex flex-col justify-start font-normal">
            <h3 className="font-medium mb-1">Bus Rating </h3>
            {["4 Star or more", "3 Star or more", "0-2 Star"].map((option) => (
              <label className="my-1">
                <input
                  type="checkbox"
                  name="rating"
                  className="mr-2"
                  value={option}
                  checked={rating.includes(option)}
                  onClick={(e) => setRating(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
          <hr className="my-3" />
          <div className="flex flex-col justify-start font-normal">
            <h3 className="font-medium mb-1">Bus Operator </h3>
            {["Zing bus", "Intercity Smart", "Safar Exp"].map((option) => (
              <label className="my-1">
                <input
                  type="checkbox"
                  name="operator"
                  className="mr-2"
                  value={option}
                  checked={operator.includes(option)}
                  onClick={(e) => setOperator(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div className="col-start-2 col-span-3 border rounded-lg">busseat</div>
    </div>
  );
};

export default Availablebus;
