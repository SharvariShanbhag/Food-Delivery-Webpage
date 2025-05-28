import React, { useContext, useEffect } from "react";
import { GiHamburger } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { dataContext } from "../context/UserContext";
import { food_items } from "../../food";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



function Nav(){
  
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
  useEffect(()=>{
    let newList=food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCate(newList)
  },[input])
  let items=useSelector(state=>state.cart)
  return(
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:h-[100px] sticky top-0 z-50 bg-gradient-to-br from-[#FFCDA2] to-[#FFAF68] space-y-4 md:space-y-0">

      <div className="w-[150px] h-[100px]  flex justify-center items-center rounded-md  mt-1">
        <GiHamburger className="w-[50px] h-[50px] text-white text-2"/> 
      <div className="font-extrabold text-white ">BiteGo</div>

      </div>
      {/* <div className="font-bold text-white">BiteGo</div> */}
      <form className="w-full md:w-[45%] h-[50px] bg-white flex items-center px-5 gap-3 rounded-md shadow-md" onSubmit={(e)=>e.preventDefault()} >
        <IoMdSearch className="text-[#F47200] w-[30px] h-[30px]"/>
        <input type="text" placeholder="Serch Items..." className="w-[100%] outline-none text-[14px] md:text-[18px]" onChange={(e)=>setInput(e.target.value)}value={input}/>
      </form>
      <div className="flex items-center mt-3">
      
      
      <div className="flex items-center gap-3 md:gap-5 mt-2 md:mt-0">
        <Link
  to="/aboutus"
  className="relative text-white px-4 py-4  rounded-full transition duration-300 hover:after:w-[35px] after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 font-semibold "
>
  About Us
</Link>

<Link
  to="/login"
  className="relative text-white px-4 py-4 rounded-full transition duration-300 hover:after:w-[35px] after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 font-semibold     "
>
  Login
</Link>
</div>

      </div>
      <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-md  mt-6 relative " onClick={()=>{
        setShowCart(true)
      }}>
            <span className="absolute top-0 right-2 text-white font-bold">{items.length}</span>
        <GiShoppingBag className="w-[30px] h-[30px] text-white "/>

      </div>
    </div>
  )
}

export default Nav

// import React, { useContext, useEffect } from "react";
// import { GiHamburger, GiShoppingBag } from "react-icons/gi";
// import { IoMdSearch } from "react-icons/io";
// import { dataContext } from "../context/UserContext";
// import { food_items } from "../../food";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';

// function Nav() {
//   const { input, setInput, setCate, setShowCart } = useContext(dataContext);
//   const items = useSelector((state) => state.cart);

//   useEffect(() => {
//     const newList = food_items.filter((item) =>
//       item.food_name.toLowerCase().includes(input.toLowerCase())
//     );
//     setCate(newList);
//   }, [input]);

//   return (
//     <div className="w-full h-[100px] flex items-center justify-between px-5 md:px-8 bg-[#f47200]">
//       {/* Menu Icon */}
//       <div className="w-[60px] h-[60px] flex justify-center items-center rounded-md mt-2">
//         <GiHamburger className="w-[50px] h-[50px] text-white" />
//       </div>

//       {/* Search Bar */}
//       <form
//         className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl mt-2"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <IoMdSearch className="text-[#F47200] w-[30px] h-[30px]" />
//         <input
//           type="text"
//           placeholder="Search Items..."
//           className="w-full outline-none text-[14px] md:text-[18px]"
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//         />
//       </form>

//       {/* About Us Link */}
//       <div className="mt-2">
//         <Link
//   to="/aboutus"
//   className="relative text-white px-4 py-4  rounded-full transition duration-300 hover:after:w-[35px] after:absolute after:left-4 after:bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300"
// >
//   About Us
// </Link>

//       </div>

//       {/* Cart Icon */}
//       <div
//         className="w-[60px] h-[60px] flex justify-center items-center rounded-md mt-2 relative cursor-pointer"
//         onClick={() => setShowCart(true)}
//       >
//         <span className="absolute top-0 right-2 text-white font-bold">
//           {items.length}
//         </span>
//         <GiShoppingBag className="w-[30px] h-[30px] text-white" />
//       </div>
//     </div>
//   );
// }

// export default Nav;
