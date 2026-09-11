import type { Technology } from "../Types/type";
interface TechnologyCardProps{
    technology:Technology
   
}
function TechonologyCard({technology}:TechnologyCardProps) {
    return (
        <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            
               <div className="flex justify-between items-center py-4 "> 
                <img src={technology.logo}/>
                 <h5 className="border border-gray-400 rounded-lg p-1 shadow-sm">{technology.badge}</h5>
                 </div>
                <h4 className="text-lg font-bold">{technology.name}</h4>
            
        <p className="py-2">{technology.description}</p>
        <div className="flex justify-between py-3">
          <span className="bg-gray-200 rounded-lg px-2">{technology.category}</span>
           <span>{technology.level}</span>
            <span>{technology.rating}</span>
            
           </div>
           <hr className="my-4 border-gray-200"/>
          <div className="flex justify-center pb-3"> <button className="px-30 py-2 rounded-xl bg-black text-white font-semibold">Add to Stack</button></div>
          
        </div>
    );
}

export default TechonologyCard;