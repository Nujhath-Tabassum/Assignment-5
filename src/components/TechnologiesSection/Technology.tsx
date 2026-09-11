import { use } from "react";
import type { Technology as TechnologyType } from "../Types/type";
import TechonologyCard from "./TechnologyCard";

interface TechnologyProps{
    TechnologyPromise:Promise<TechnologyType[]>
}
function Technology({TechnologyPromise}:TechnologyProps) {
    const technology=use(TechnologyPromise)
    return (
        <section className='px-30 py-5'>
            <div className="mb-8">
                <h2 className="text-4xl font-bold">Explore the <span className="bg-gradient-to-r from-pink-600 to-purple-500  bg-clip-text text-transparent">Technologies</span></h2>
                <p className="my-2 text-gray-700">Pick one technology per catagory to build your ideal stack.</p>
                <div className="grid grid-cols-3 gap-8"
                >{technology.map((technology)=>(<TechonologyCard key={technology.name} technology={technology}></TechonologyCard>))}</div>
            </div>
        </section>
    );
}

export default Technology;