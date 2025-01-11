import arrow_right from '../../assets/arrow_right.png'

type Package = {
    id: number,
    title: string,
    price: number,
    perks: string[],
    popularity: string
}

const Packages = ({ packages }: { packages: Package }) => {
  const buttonColor = packages.popularity === "popular" ? "bg-[#071C99]" : "";
  const textColor = packages.popularity === "popular" ? "text-white" : "text-[#071C99]"; 
  const borderColor = packages.popularity === "popular" ? "border-[#071C99]" : "border-[#D9D9D9]";

  return (
    <li className={`flex flex-col justify-between gap-2 border-2 ${borderColor} rounded-2xl p-5 relative w-[232px]`}>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary">{packages.title}</h4>
            <p className="price text-primary">${packages.price}</p>
      </div>
      <hr /> 
      <ul className="pb-5 ">
        {packages.popularity === "popular" && <p className='absolute top-[-16px] left-1/4 border-2 border-[#071C99] rounded-md p-1 font-bold text-sm bg-white'>MOST POPULAR</p>}
            {packages.perks.map(perk =>
              <li key={perk} className='flex gap-2 '>
                
                <img src={arrow_right} alt="" className="w-6 h-6" />
                {perk}
                
              </li>)}
          </ul>
          
      <button className={`${textColor} border-2 border-[#071C99] rounded-md py-2 px-4 font-bold text-sm w-full ${buttonColor}`} >Start</button>
      </li>
  )
}

export default Packages