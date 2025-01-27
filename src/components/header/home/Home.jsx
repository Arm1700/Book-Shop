import { allBooksArray } from "../../../entities/allBooksArray";
import Box from "../../shared/Box";
export default function Home() {
    return (

        <div className="page">
            <div className="h-[100vh]"></div>
            <div id="BooksList" className="grid grid-cols-3 gap-3 p-4">
                {allBooksArray.map((book) => {
                    return (
                        <Box book={book} key={book.id}></Box>
                    );
                })}
            </div>
            <div className="h-[100vh]"></div>
        </div>
    )
}