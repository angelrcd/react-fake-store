import React from "react";

function Card({item}){
  return (
    <div className="flex flex-col justify-between bg-white h-[500px] w-[300px] rounded-md shadow-md">
      <img className="mt-2 mx-auto w-24" src= {`${item.image}`}  alt="" />
      <p className="ml-2">{item.title}</p>
      <p className="text-sm ml-2">Category: {item.category}</p>
      <p className="p-2 text-sm text-gray-700">{item.description}</p>
      <p className="ml-2">{item.price}$</p>
      <div className="flex justify-between">
        <p className="p-2 text-sm">{item.rating.rate}/5 ({item.rating.count})</p>
        <button className="mr-2 my-2 px-3 rounded-lg border-blue-400 border-2 hover:shadow-md hover:scale-110 duration-150">ADD</button>
      </div>
    </div>
  );
}

export default Card;