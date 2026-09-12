import logo from "../assets/logo-text.png"

function Footer() {
    return (
        <footer >
            <div className="border-t-3 border-gray-200 py-20 grid grid-cols-12 gap-15 px-25">
                <div className="col-span-5">
                <img src={logo} className="py-3"/>
                <p className="pb-7 text-gray-500">Curated tools, technologies, and resources for developers building mordern software</p>
                <div className="flex gap-6">
                    <span>GitHub</span>
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                </div>

            </div>
            <div className="col-span-7 flex justify-between pr-20 ">
            <ul>
             <li className="font-semibold text-md my-3">Product</li>
             <li className="text-sm font-light my-1 text-gray-500">Home</li>
             <li className="text-sm font-light my-1 text-gray-500">Technologies</li>
             <li className="text-sm font-light my-1 text-gray-500">Projects</li>
            </ul>
            <ul>
             <li className="font-semibold text-md my-3">Company</li>
             <li className="text-sm font-light my-1 text-gray-500">About</li>
             <li className="text-sm font-light my-1 text-gray-500">Contact</li>
             <li className="text-sm font-light my-1 text-gray-500">Careers</li>
            </ul>
            <ul>
             <li className="font-semibold text-md my-3">Legal</li>
             <li className="text-sm font-light my-1 text-gray-500">Privacy Policy</li>
             <li className="text-sm font-light my-1 text-gray-500">Terms of Service</li>
            
            </ul>
            <hr className="my-2 border-2 border-gray-200"/>

            </div>
            </div>
             <hr className=" mb-10 mx-25 border-2 border-gray-200 "/>
             <div className=" text-sm text-gray-400 flex justify-between px-25 my-10">
                <p>2026 Dev Stack. All rights are reserved</p>
                <div className="flex gap-5">
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
             </div>
        </footer>
    );
}

export default Footer;