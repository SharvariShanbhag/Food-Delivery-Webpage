import React, { useContext} from "react";
import Nav from '../components/Nav'
import Categories from "../category";
import Card from "../components/Card";
import { food_items } from "../../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";

 
function Home(){
    let {cate,setCate,input,showCart,setShowCart} = useContext(dataContext)

function filter(category){
    if(category==="All"){
        setCate(food_items)
    }else{
        let newList=food_items.filter((item)=>(item.food_category===category))
        setCate(newList)
    }
}


let items=useSelector(state=>state.cart)


let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes =subtotal*0.5/100;
let total= Math.floor(subtotal+deliveryFee+taxes)
  return(
    
    
        <div className="bg-gradient-to-br from-[#FFCDA2] to-[#FFAF68] w-full min-h-screen">
            <Nav/>
            <Header/>
            {!input?<div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
                {Categories.map((item)=>{
            return <div className="w-[140px] h-[130px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-[#FF6947] rounded-lg shadow-xl hover:bg-[#FF8616] hover:text-white cursor-pointer transition-all duration-200" onClick={()=>filter(item.name)}>
                {item.icon}
                {item.name}
                </div>
                })}
            </div>:null}
        
            <div className="w-full pt-8 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-32 gap-y-6 max-w-6xl mx-auto">
    {cate.length>1?cate.map((item) => (
      <Card
        key={item.id}
        name={item.food_name}
        image={item.food_image}
        price={item.price}
        id={item.id}
        type={item.food_type}
      />
    )):<div className="flex text-center text-2xl text-[#FF8616] font-semibold pt-8">No Dish Found</div>}
    
  </div>
</div>
            
            {/* <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 shadow-xl bg-[#FFAF68] p-6 duration-500  overflow-auto transition-all ${showCart? "translate-x-0":"translate-x-full "}
                 `}> */}
                 <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 z-[999] shadow-xl bg-[#FFAF68] p-6 duration-500 overflow-auto transition-all ${showCart ? "translate-x-0" : "translate-x-full"}`}>

                <header className="width-[100%] flex justify-between items-center ">
                    <span className="text-white">Order Items</span>
                    <RxCross2 className="text-white width-[30px] h-[30px] cursor-pointer hover:text-gray-600" onClick={()=>setShowCart(false)}/>

                </header>
                {items.length>0? <>
            <div className="w-full mt-9 flex flex-col gap-8 ">
                {items.map((item)=>(
                    <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                ))}
            </div>
            <div className="w-full border-t-2 border-white mt-8 flex flex-col items-center">
                <div className="w-full border-t-2 border-b-2 border-r-gray-800 mt-7 flex flex-col gap-3 p-8 ">
                    <div className="flex justify-between items-center" >
                        <span className="text-white text-lg font-semibold">Subtotal</span>
                        <span className="text-white font-semibold text-lg">Rs {subtotal}/-</span>
                    </div>
                    <div className="flex justify-between items-center" >
                        <span className="text-white text-lg font-semibold">Deliver Fee</span>
                        <span className="text-white font-semibold text-lg">Rs {deliveryFee}/-</span>
                    </div>
                    <div className="flex justify-between items-center" >
                        <span className="text-white text-lg font-semibold">taxes</span>
                        <span className="text-white font-semibold text-lg">Rs {taxes}/-</span>
                    </div>
                </div>
                <div className=" w-full flex justify-between " >
                        <span className="text-white text-2xl font-semibold  m-8">Total</span>
                        <span className="text-white font-semibold text-xl m-8 ">Rs {total}/-</span>
                </div>
                <button className="w-[50%] p-3 rounded-xl bg-white text-[#FFAF68] hover:bg- transition " onClick={()=>{toast.success("Order Item")} }>
                    Place Order
                </button>
               
            </div>
             </>:
             <div className=" text-center text-2xl text-white font-semibold mt-10">
                </div>}
            
            </div>
            <Footer/>

        </div>
        
    
  )
}

export default Home








