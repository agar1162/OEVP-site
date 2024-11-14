export default function Navbar() {
    const logoref = "ASUC-logo.png";
    let menuitems = [
        "Home",
        "Committees",
        "Free Resources",
        "Our Impact",
        "ASUC Finance"
    ];

    let logos = {
        "1": "home-2@2x.png",
        "2": "graph.png",
        "3": "box.png",
        "4": "setting-2.png",
        "5": "box.png"  // New unique logo for ASUC Finance
    };

    return (
        <nav className="flex flex-row">
    <a className="basis-1/4 bg-green-500 flex justify-center items-center text-4xl">
        <img className="w-50 h-50 mr-2" src={logoref} alt="Logo" />
        ASUC OEVP
    </a>
    <ul className="basis-1/2 bg-blue-500 flex flex-row justify-center self-center">
        <li className="p-8 text-2xl text-gray-800 flex items-center">
            <a className="flex items-center">
                <img className="w-6 h-6 mx-2" src={logos["1"]} alt="Icon 1" />
                {menuitems[0]}
            </a>
        </li>
        <li className="p-8 text-2xl text-gray-800 flex items-center">
            <a className="flex items-center">
                <img className="w-6 h-6 mx-2" src={logos["2"]} alt="Icon 2" />
                {menuitems[1]}
            </a>
        </li>
        <li className="p-8 text-2xl text-gray-800 flex items-center">
            <a className="flex items-center">
                <img className="w-6 h-6 mx-2" src={logos["3"]} alt="Icon 3" />
                {menuitems[2]}
            </a>
        </li>
        <li className="p-8 text-2xl text-gray-800 flex items-center">
            <a className="flex items-center">
                <img className="w-6 h-6 mx-2" src={logos["4"]} alt="Icon 4" />
                {menuitems[3]}
            </a>
        </li>
        <li className="p-8 text-2xl text-gray-800 flex items-center">
            <a className="flex items-center">
                <img className="w-6 h-6 mx-2" src={logos["5"]} alt="Icon 5" />
                {menuitems[4]}
            </a>
        </li>
    </ul>
    <a className="basis-1/4 bg-green-500 flex justify-center items-center text-2xl text-gray-800 font-bold">
        
    </a>
</nav>

    );
    
    
}

/*

*/