import { NavLink } from "react-router-dom";
export default function Box({ book }) {
    return (
        <NavLink to={`/home/${book.genre.toLowerCase()}/${book.id}`}>
            <div key={book.id} className="Books h-[auto] p-4 bg-gray-800 rounded-lg shadow-lg">
                <p className="h-[8vmin] text-center flex justify-center text-2xl font-bold text-emerald-300">{book.name}</p>
                <p className="h-[5vmin] flex justify-center text-2xl font-bold text-slate-300">{book.genre}</p>
                <p className="h-[7vmin] font-medium text-lime-300 text-center">{book.autor}</p>
                <img
                    src={book.image}
                    alt="Book"
                    className="w-full h-[45vmin] object-cover rounded-md mt-2"
                />
                <p className="h-[10vmin] text-green-500 font-semibold mt-2">{book.info}</p>
            </div>
        </NavLink>
    )
}