import { PiDotsNineBold } from "react-icons/pi";

import { TbCoffee } from "react-icons/tb";
import { LuSoup } from "react-icons/lu";

import { GiNoodles } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { PiHamburgerBold } from "react-icons/pi";


const Categories=[
    {
        id: 1,
        name:"All",
        icon: <PiDotsNineBold className="w-[60px] h-[60px] text-[#FF6947] hover:text-white "/>

    },
    {
        id: 2,
        name:"breakfast",
        icon: <TbCoffee className="w-[60px] h-[60px] text-[#FF6947] hover:text-white"/>


    },
    {
        id: 3,
        name:"soups",
        icon: <LuSoup className="w-[60px] h-[60px] text-[#FF6947] hover:text-white "/>

    },
    {
        id: 4,
        name:"pasta",
        icon: <GiNoodles className="w-[60px] h-[60px] text-[#FF6947] hover:text-white"/>


    },
    {
        id: 5,
        name:"main_course",
        icon: <GiKnifeFork className="w-[60px] h-[60px]text-[#FF6947] hover:text-white"/>

    },
    {
        id: 6,
        name:"pizza",
        icon: <FaPizzaSlice className="w-[60px] h-[60px]text-[#FF6947] hover:text-white"/>


    },{
        id: 7,
        name:"burger",
        icon: <PiHamburgerBold className="w-[60px] h-[60px]text-[#FF6947] hover:text-white"/>

    }

]

export default Categories;