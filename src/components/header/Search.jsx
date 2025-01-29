export default function JustClick({ searched, setSearched }) {
  const isSearch = () => setSearched(prev => !prev)
  return (
    <button onClick={isSearch}
      className={`flex justify-end  relative 
    items-end w-full    rounded-full text-5xl font-bold
    pt-4
    `}
    ><p className={`absolute  right-0 top-0 
    mr-2 rounded-full w-8 h-8 ${searched ? "animate-none" : "animate-pulse"}
    `}>⌕</p>
    </button>
  )

}
