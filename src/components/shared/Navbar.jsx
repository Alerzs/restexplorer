import { NavLink } from "react-router"


export function Navbar(){
    return(
        <nav className="flex flex-col items-center pt-4 gap-5 md:flex-row md:px-25 md:gap-15">
            <h1 className="text-2xl font-extrabold">REST<span className="text-blue-600">Explorer</span></h1>
            <ul className="flex gap-5 text-gray-600 font-semibold">
                <li className="hover:text-black"><NavLink to="/">Home</NavLink></li>
                <li className="hover:text-black"><NavLink to="/countries">Countries</NavLink></li>
                <li className="hover:text-black"><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}