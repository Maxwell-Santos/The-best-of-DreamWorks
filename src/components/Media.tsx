import { Link } from "react-router-dom";

interface MediaProps{
  banner?: string;
}
export function Media({banner}:MediaProps){
  return(
    <div 
    className="relative first:ml-4 md:first:ml-10 flex-shrink-0 w-[170px] h-[250px] rounded-md shadow-lg bg-gray-300 md:w-[200px] md:h-[280px] overflow-hidden group">
      <img 
      className="w-full h-full object-cover transition group-hover:blur-sm delay-100"
      src={banner} 
      alt="banner"
      loading="lazy"                                                
      />


      <div 
      className="absolute transform translate-y-[100%] bg-gray-700/50 transition duration-500 ease-in-out w-full h-[70%] flex flex-col items-center justify-center gap-3 group-hover:-translate-y-[100%] p-4 shadow-xl">

        <h2 
        className="leading-tight text-sm md:text-base">
          Poderoso Chefinho
        </h2>

        <p 
        className="line-clamp-3  leading-tight font-light text-xs md:text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita repudiandae dignissimos ad vero ex atque suscipit quia error accusamus, voluptate possimus consequuntur tempora iure praesentium deserunt voluptates architecto quam?
        </p>

        <Link 
        className="w-full py-2 text-sm md:py-3 bg-violet-700 hover:bg-violet-600 transition text-center rounded-lg shadow-md "
        to="/about">
          Saiba mais 
        </Link>
      </div>
    </div>
  )
}