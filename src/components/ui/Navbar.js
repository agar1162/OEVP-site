import TextField from "@mui/material/TextField";

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
        <nav className="flex flex-row bg-[#003A70] text-white">
            <a className="basis-1/4  flex justify-center items-center text-4xl">
                <img style={{ width: '61.261px', height: '57px' }} className="mr-2" src={logoref} alt="Logo" />
                ASUC OEVP
            </a>
            <ul className="basis-1/2  flex flex-row justify-center text-white self-center">
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a className="flex items-center">
                        {menuitems[0]}
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a className="flex items-center">
                        {menuitems[1]}
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a className="flex items-center">
                        {menuitems[2]}
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a className="flex items-center">
                        {menuitems[3]}
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center">
                    <a className="flex items-center text-white">
                        {menuitems[4]}
                    </a>
                </li>
            </ul>
            <a href="#" className="basis-1/4 bg-green flex justify-center items-center text-2xl text-gray-800 font-bold"></a>

            
        </nav> );
    
    
}

/*

*/