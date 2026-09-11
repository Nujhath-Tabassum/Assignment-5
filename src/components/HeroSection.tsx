import hero from "../assets/banner-stack.png"
function HeroSection() {
    return (
        <div className="flex justify-between items-center  p-10">
            <div className="m-10 p-10">
                <h2 className="text-6xl font-bold my-4 ">Build Your Ideal<br/><span className="bg-gradient-to-r from bg-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Development Stack</span></h2>
                <p className="my-4 text-gray-600">Explore frontend,backend,database and tooling options,<br/> compare them side by side, and put together the stacks that fits your next project</p>
                <div className="flex gap-3 items-center ">
                    <button className="bg-gradient-to-r from bg-orange-400 to-pink-600   px-4 py-1 rounded-md">Explore Technologies</button>
                    <button className="border border-gray-700 px-12 py-1 rounded-md">Learn More</button>
                </div>
            </div>
            <img src={hero}/>

        </div>
    );
}

export default HeroSection;