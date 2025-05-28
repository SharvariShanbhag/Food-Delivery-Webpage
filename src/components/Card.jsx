import React from "react";
import image1 from "../assets/image1.jpg"
import { FaLeaf } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
function Card({name,image,id,price,type}){
  let dispatch =useDispatch()
  return(
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-[#FF7A04]">
        <div className="w-[100%] h-[60%] overflow-hidden rounded-lg ">
            <img src={image} alt=""  className="object-cover"/>
        </div>
        <div className=" text-2xl font-semibold">
            {name}
        </div>
        <div className="w-full flex  items-center justify-between">
           <div className="text-lg font-bold text-[#FF7A04]">Rs {price}/-</div> 
           <div className="text-lg font-semibold text-[#FF7A04]  flex justify-center items-center gap-2">{type==="veg"?<FaLeaf />:<GiChickenOven />
 }<span>{type} </span></div>
        </div>
        <button className="w-full p-3 rounded-xl bg-[#FF7A04] text-white hover:bg-[#FFAF68] transition " onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
      toast.success("Item Added")}
      }>Add to dish</button>
    </div>
  )
}

export default Card