import React from "react";
import image1 from "../assets/image1.jpg"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { IncrementQty, RemoveItem,DecrementQty } from "../redux/cartSlice";


function Card2({id,price,image,qty,name}){
    let dispatch=useDispatch()
  return(
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 md:h-[140px] py-2">

      <div className=" h-full w-[60%] p-2 flex">
       <div className=" h-full w-[60%] overflow-hidden rounded-l">
            <img src={image} alt="" className="object-cover "/>
        </div> 
       <div className="w-[40%] h-full flex flex-col px-9 gap-3">
        <div className="text-lg text-white font-semibold ">{name}</div>
        <div className="w-[110px] h-[50px] bg-white flex rounded-lg overflow-hidden shadow-lg  font-semibold border-2 border-[#F47200]" >
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-[#F47200] hover:bg-gray-100 " onClick={()=>qty>1?dispatch(DecrementQty(id)):1}>-</button>
            <span className="w-[40%] h-full bg-slate-100 flex justify-center items-center text-[#F47200]  ">{qty}</span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-[#F47200]  hover:bg-gray-100   " onClick={()=>dispatch(IncrementQty(id))}>+</button>
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-4">
        <span className="text-lg text-white font-semibold pt-2">Rs. {price}/-</span>
        <RiDeleteBin5Fill className="w-[30px] h-[30px ] text-white" onClick={()=>dispatch(RemoveItem(id))}/>

      </div>
    </div>
  )
}

export default Card2