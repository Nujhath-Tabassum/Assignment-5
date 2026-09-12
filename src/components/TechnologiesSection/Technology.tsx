
import { use, useState } from "react";
import type { Technology as TechnologyType } from "../Types/type";
import TechonologyCard from "./TechnologyCard";
import { toast } from "react-toastify";

interface TechnologyProps {
    TechnologyPromise: Promise<TechnologyType[]>
}

function Technology({ TechnologyPromise }: TechnologyProps) {
    const technology = use(TechnologyPromise)
    const [stack, setStack] = useState<TechnologyType[]>([]);

   const handleAddToStack = (technology: TechnologyType) => {
    if (stack.some((item) => item.name === technology.name)) {
        return;
    }

    setStack([...stack, technology])
}
const handleRemoveFromStack = (technology: TechnologyType) => {
    setStack((prevStack) =>
        prevStack.filter(
            (item) => item.name !== technology.name
        )
    );

    toast.info("Removed from Stack");
};
    return (
        <section className="px-20 py-16">

            <div className="mb-8">

             <div className="my-12">
            <h2 className="text-4xl font-bold">Explore the <span className="bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">Technologies</span></h2>

             <p className="my-2 text-sm text-gray-500"> Pick one technology per catagory to build your ideal stack </p>
                </div>


                <div className="grid grid-cols-4 gap-6">

                   
          <div className="col-span-3 grid grid-cols-3 gap-5"> {technology.map((technology) => ( 
    <TechonologyCard 
        key={technology.name} 
        technology={technology} 
        handleAddToStack={handleAddToStack}
        stack={stack}
    /> 
))}

                    </div>


                    
                    <div className="col-span-1">

                        <div className="border border-gray-200 rounded-xl p-4 shadow-sm h-fit">

                         <h2 className="text-lg font-semibold text-gray-900"> Your Stack</h2>

                            <p className="text-xs text-gray-400 mt-1">
                                {stack.length === 0? "No technologies selected yet." : `${stack.length} Technology Selected${stack.length > 1 ? "s" : ""}`}</p>


                            {stack.length === 0 ? (

                                <div className="m-4 h-10 border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                                    <p className="text-xs text-gray-400">Your stack is empty. </p>
                                </div>

                            ) : (

                                <div className="mt-4 space-y-2">{stack.map((technology) => (

                                        <div key={technology.name}className="border border-gray-200 rounded-lg p-3 flex items-center gap-3" >

                                            <img src={technology.logo}alt={technology.name} className="w-9 h-9 object-contain"/>

                                            <div>
                                                <h3 className="text-xs font-semibold text-gray-900"> {technology.name}</h3>

                                                <p className="text-[10px] text-gray-400"> {technology.category} </p>
                                            </div>


                                            <button onClick={() => handleRemoveFromStack(technology)} className="ml-auto text-xl font-light text-gray-400 hover:text-gray-600"> ×</button>

                                        </div>))}
                                    <button  onClick={() => {setStack([]);toast.info("Stack Cleared");}}className="w-full mt-10 h-8 border border-red-300 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition">Remove All</button>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Technology;