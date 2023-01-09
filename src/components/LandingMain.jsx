import React from "react";

function LandingMain() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between">
        <div className= "bg-[url('/img/bg.jpg')] bg-cover h-full flex justify-between">
          <div className="ml-28 text-gray-200 flex flex-col justify-center">
            <h1>Fake store front end</h1>
            <p>Huge product collection</p>
            <p>CLothing, jewelery and electronics</p>
            <button className="w-fit py-2 px-5 rounded-md bg-red-500 hover:scale-105 duration-500 shadow-lg">Shop now &#9658;</button>
          </div>
          <img className="self-end h-full " src="/img/model.png" alt="" />
        </div>
        <div className="h-[50px] bg-gray-300 flex flex-col items-center">
          <a href="#body">
            <button className="h-10 w-10 relative bottom-5 rounded-full bg-gray-200 hover:scale-110 duration-200 shadow-lg">
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default LandingMain;