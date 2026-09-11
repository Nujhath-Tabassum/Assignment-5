import type { Technology } from "../Types/type";
interface TechnologyCardProps{
    technology:Technology
    handleAddToStack:(technology:Technology)=>void;
    stack:Technology[];
}
function TechonologyCard({technology,handleAddToStack,stack}:TechnologyCardProps) {
    const isAdded = stack.some((item) => item.name === technology.name);
    return (
      <div className={`rounded-xl pb-2 pt-4 px-4 shadow-sm ${isAdded ? "border-2 border-pink-300": "border border-gray-200"}`}>
            
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
          <div className="flex justify-center pb-3"> 
            <button onClick={() => handleAddToStack(technology)}disabled={isAdded} className={`px-18 py-1 rounded-xl font-semibold ${isAdded? "bg-pink-50 text-pink-500": "bg-black text-white"}`}
>
    {isAdded ? "Added to Stack" : "Add to Stack"}
</button></div>
          
        </div>
    );
}

export default TechonologyCard;