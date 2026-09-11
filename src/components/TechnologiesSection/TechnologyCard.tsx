import type { Technology } from "../Types/type";
interface TechnologyCardProps{
    technology:Technology
    handleAddToStack:(technology:Technology)=>void;
}
function TechonologyCard({technology,handleAddToStack}:TechnologyCardProps) {
    return (
       <div className="border border-gray-200 rounded-xl pb-2 pt-4 px-4 shadow-sm ">
            
               <div className="flex justify-between items-center py-1 "> 
                <img src={technology.logo}/>
                 <h5 className="border border-gray-400 rounded-lg p-1 shadow-sm">{technology.badge}</h5>
                 </div>
                <h4 className=" font-bold">{technology.name}</h4>
            
        <p className="py-1 text-sm">{technology.description}</p>
        <div className="flex justify-between  text-sm ">
          <span className="bg-gray-200 rounded-lg px-2">{technology.category}</span>
           <span>{technology.level}</span>
            <span>{technology.rating}</span>
            
           </div>
           <hr className="my-2 border-gray-200"/>
          <div className="flex justify-center pb-3"> <button onClick={() => handleAddToStack(technology)} className="px-18 py-1 rounded-xl bg-black text-white font-semibold">Add to Stack</button></div>
          
        </div>
    );
}

export default TechonologyCard;