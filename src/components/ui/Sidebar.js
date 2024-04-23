import React from "react";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <div className="md:w-2/5 xl:w-1/5 bg-slate-800">
            <div className="p-6">
                <p className="Uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurante app</p>
                <p className="mt-3 text-gray-600">Administra tu restaurante en las siguientes opciones:</p>
            </div>
            <nav>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Ordenes</NavLink>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/menu">Menu</NavLink>
            </nav>
        </div>
     );
}
 
export default Sidebar;