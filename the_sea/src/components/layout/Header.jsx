import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [menuStatus, setMenuStatus] = useState("hidden");

    const setMenu = () => {
        setMenuStatus((menuStatus == "hidden")?"":"hidden")
    } 

    console.log("load");

    return (
        <div className="sticket">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
                </div>
                <div onClick={setMenu} className={"block md:hidden"}>
                    <div className="flex items-center px-3 py-2 border rounded text-white hover:text-black hover:border-black">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </div>
                </div>
                <div onClick={setMenu} className={menuStatus + " w-full block flex-grow md:flex md:items-center md:w-auto"}>
                    <div className="text-sm md:flex-grow">
                        <Link to="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-black mr-4">Home</Link>
                        <Link to="/about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-black">About</Link>
                    </div>
                    <div>
                        <div href="#" className="inline-block text-sm px-4 py-2 leading-none text-white border-white mt-4 lg:mt-0">
                            <Link className="inline-block px-2 hover:text-black border-r-2">Login</Link>
                            <Link className="inline-block px-2 hover:text-black">Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header

