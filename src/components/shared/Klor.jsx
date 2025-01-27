export default function Klor() {
    return (
        <>
            <div id="klor"
                className="bg-teal-900 fixed
            w-[40vmin] h-[40vmin] rounded-full  right-[-25.5vmin] top-[-25.5vmin]
            transition-all ease-in duration-[1.1s] shadow-lg shadow-blue-500
            hover:right-[-9.5vmin] hover:top-[-9.5vmin] cursor-pointer
            ">
                <p className="absolute bottom-[13vmin] left-[13vmin] text-pink-100
                font-bold
                ">
                    Current Page
                </p>
            </div>

        </>
    )
}