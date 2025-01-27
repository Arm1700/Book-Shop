import { NavLink } from "react-router-dom";
import { categoryArray } from "../../entities/categoryArray";
export default function Navigation() {
    return (
        <nav id="Home"
            className="pb-4 font-bold text-slate-900">
            {
                categoryArray.map((category) => {
                    return (
                        <div key={category.id}
                            className="pl-[2vmin] pt-3 text-2xl transition-all duration-300
                                 ease-linear  hover:scale-[1.055] cursor-pointer hover:text-stone-950 ">
                            <NavLink to={category.path} key={category.id}>
                                {category.name}
                            </NavLink>
                        </div>
                    )
                })
            }
        </nav>
    )
}