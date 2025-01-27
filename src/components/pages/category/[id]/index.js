import { useParams } from "react-router-dom";
import { allBooksArray } from "../../../../entities/allBooksArray";
import Box from "../../../shared/Box";
import { historyArray } from "../../../../entities/historyArray";



export default function Book() {

    const Histories = (id) => {
        console.log(historyArray);
        
        const historyId = historyArray.find((history) => history.bookId === Number(id));
        return (
            <div key={id}>
                <p id="historyBox"
                    className="text-2xl font-bold ">
                    <span id="history" >{historyId.history}</span> </p>
            </div>
        )
    }

    const { id } = useParams();
    const book = allBooksArray.find((book) => book.id === Number(id));
    let genre = book.genre;

    return (
        <div className="page gap-4">
            <div className="h-[100vh]"
            ></div>
            <div id="currentBook"
                className="flex flex-col justify-center items-center ">
                <Box book={book} />
                {Histories(id)}
            </div>
            <div className="h-[100vh] frontBooks">
                {
                    allBooksArray.filter((book) => book.genre === genre && book.id !== Number(id)).map((book) => {
                        return (
                            <div className="">
                                <Box key={book.id} book={book} className="flex flex-col" />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}