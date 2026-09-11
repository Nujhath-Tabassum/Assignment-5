
import { use, useState } from "react";
import type { Technology as TechnologyType } from "../Types/type";
import TechonologyCard from "./TechnologyCard";

interface TechnologyProps{
    TechnologyPromise:Promise<TechnologyType[]>
}
function Technology({TechnologyPromise}:TechnologyProps) {
    const technology=use(TechnologyPromise)
    const [stack, setStack] = useState<TechnologyType[]>([]);
    const handleAddToStack = (technology: TechnologyType) => {setStack([...stack, technology])}
    return (
        <section className='px-20 py-20'>
          <div className="mb-8">
            <div className="my-15">
                <h2 className="text-4xl font-bold">Explore the <span className="bg-gradient-to-r from-pink-600 to-purple-500  bg-clip-text text-transparent">Technologies</span></h2>
                <p className="my-2 text-gray-700">Pick one technology per catagory to build your ideal stack.</p>
            </div>
               

             <div className="grid grid-cols-4 gap-8">
            
                    <div className="col-span-3 grid grid-cols-3 gap-8"
                >{technology.map((technology)=>(<TechonologyCard key={technology.name} technology={technology} handleAddToStack={handleAddToStack}></TechonologyCard>))}</div>
            
            <div className="col-span-1 border border-gray-200 rounded-xl p-5 shadow-sm h-fit">
                <h2>Your Stack</h2>
                {stack.length === 0 ? (<p className="text-gray-500 mt-5">Your stack is empty.</p> ):(<div className="mt-5 space-y-3">
                    {stack.map((technology) => (<div key={technology.name}className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                    <img src={technology.logo} alt={technology.name}  className="w-10 h-10"/>
                    <div>
                    <h3 className="font-semibold">{technology.name}</h3>

                    <p className="text-sm text-gray-500">{technology.category} </p>
                 </div>
                 </div>
                 ))}
                 </div>)}
</div>
            </div>
              </div> 
           
        </section>
    );
}

export default Technology;

