import logo from "../assets/logo-text.png"

function Nav() {
    return (
        <nav className="bg-gray-50 sticky top-0">
            <div className="flex items-center justify-between  py-5 px-20">
                
                <img src={logo} />

                <ul className="flex gap-10 items-center">
                    <li className="text-pink-600">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex items-center gap-4">
                    <h4>Sign In</h4>
                    <button className="bg-pink-600 text-white px-4 py-1 rounded-full">Sign Up</button>
                </div>

            </div>
        </nav>
    );
}

export default Nav;