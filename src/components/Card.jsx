import React from "react";

const truncateDescription =(descrition)=> {
  if(descrition?.length <350) return descrition;


  return descrition?.slice(0, 350)+"...";
};

const truncateTitle =(descrition)=> {
  if(descrition?.length <50) return descrition;


  return descrition?.slice(0, 80)+"...";
};

function Card({item}){
  return (
    <div className="flex flex-col justify-between py-4 px-8 bg-white h-[500px] w-[600px] rounded-md shadow-md">
      <p className="px-3 text-xl font-extrabold w-full bg-blue-900 text-white">{item.category.toUpperCase()}</p>
      <div className="flex gap-3 h-full">
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="font-extrabold">{truncateTitle(item.title)}</h1>
            <p className="text-xl font-bold">${item.price}</p>
          </div>
          <img className="mx-auto h-[200px]" src={`${item.image}`} alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <p className="text-sm break-words">{truncateDescription(item.description)}</p>
          <p className="mb-5">{item.rating.rate}/5 ({item.rating.count})</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center h-8 text-ellipsis">
        <p className="underline cursor-pointer">More info</p>
        <button className="text-white bg-blue-500 px-3 py-1 hover:scale-105 hover:shadow-sm duration-150 rounded-2xl">Add to cart</button>
      </div>
    </div>
  );
}

export default Card;