import Box from "../../shared/Box";
import { allBooksArray } from "../../../entities/allBooksArray";

export default function Category({ name }) {
    const array = allBooksArray.filter((book) => book.genre === name);
    return (<div className="page">
        <div className="h-[100vh]"
        ></div>
        <div className="grid grid-cols-3 gap-4" id={name}>
            {array.map((book) => {
                return (
                    <Box book={book} key={book.id}></Box>
                )
            })}
        </div>
        <div className="h-[100vh]"
        ></div>
    </div>)
}