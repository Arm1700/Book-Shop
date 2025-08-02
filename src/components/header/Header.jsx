import { useState, useEffect } from "react";
import JustClick from "./Search";
import { NavLink } from "react-router-dom";



export default function Header() {
    const [searched, setSearched] = useState(false)
    const [menu, setMenu] = useState(true)

    useEffect(() => {
        console.log("Searched state changed:", searched);
    }, [searched]);

    const isMenu = () => setMenu(prev => !prev)
    return (
        <div id="Header"
            className="relative ">
            <button onClick={isMenu}
                className={` text-2xl absolute
                bg-gray-500  font-bold 
                rounded-br-lg hover:bg-gray-400 active:bg-gray-600
                ${menu ? "bg-gray-500" : "animate-pulse"}
                `}>
                <p>
                    {menu ? "Close Menu" : "Open Menu"}
                </p>

            </button>
            <div id="nav"
                className={`h-[100vh] w-[30vmin]  bg-slate-700
                border-r-2 ${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                border-cyan-900 
                `}>
                <div className="p-4 flex justify-end
            flex-col items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXo2vrSuT3xiNBgr5G4CI0PSWh0UUqjF-hg&s" alt="User"
                        className="rounded-full w-48 "

                    />
                    User: Gago Ashotyan
                </div>


                <div id="navigation"
                    className="w-full 
            pl-1 pt-3 text-2xl
            ">

                    <div className=" bg-blue-700 cursor-pointer	
            flex justify-center pt-3 center hover:shadow-inner hover:shadow-black
            transition-all ease-in duration-[0.9s] hover:bfg-blue-800 hover:scale-[1.01]
            ">
                        <NavLink to="/home">Library</NavLink>
                    </div>
                    <div className=" bg-blue-800 shadow-inner	
            transition-all ease-in duration-[0.9s] hover:bg-blue-700
            flex justify-center  hover:shadow-inner hover:shadow-black	
            pt-3 center hover:scale-[1.01] cursor-pointer
            ">
                        <NavLink to="/about">About</NavLink>
                    </div>

                    <div className=" bg-blue-900 shadow-inner cursor-pointer	
            transition-all ease-in duration-[0.9s] hover:bg-blue-800
            flex justify-center  hover:shadow-inner hover:shadow-black	
            pt-3 center hover:scale-[1.01] 
            ">
                        <NavLink to="/news">News</NavLink>
                    </div>

                    <a href="#media" id="mediaLink"
                        className="  no-underline
                   flex justify-center 
                    pt-3 center cursor-pointer
            ">Our Social Media</a>
                </div>

                <div className="relative">
                    {searched && (
                        <input className={`w-full h-8 bg-blue-500 rounded-full
                             absolute right-0 top-4 transition-all duration-900 
                             ${searched ? "searchInp" : "searchInpClose"}
                          `} />
                    )}
                    <JustClick searched={searched} setSearched={setSearched}
                    />
                </div>
                <div className="justify-end  absolute
                bottom-0 left-0 p-2">
                    @Copyright
                </div>
            </div>

        </div>

    )
}