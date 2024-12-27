
import SearchBar from "./search";
export default function Navbar() {
    const logoref = "ASUC-logo.png";

    

    return (
        <nav className="flex flex-row bg-[#003A70] text-white" style={{height:'97px'}}>
            <a className="basis-1/6  flex justify-center items-center ">
                <img style={{ width: '90px', height: '90px' }} className="mr-2" src={logoref} alt="Logo" />
            </a>
            <ul className="basis-2/3  flex flex-row justify-center text-white self-center">
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a href="https://www.facebook.com/evpmelvintangonan/" className="flex items-center" style={{fontSize:20, fontWeight: 'Bold'}}>
                        Home
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a href="https://twitter.com/asucevp"className="flex items-center" style={{fontSize:20, fontWeight: 'Bold'}}>
                        Departments
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a href="https://www.instagram.com/asuceavp/" className="flex items-center" style={{fontSize:20, fontWeight: 'Bold'}}>
                        Free Resources
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center text-white">
                    <a href="https://www.instagram.com/ucbvicepresident/" className="flex items-center" style={{fontSize:20, fontWeight: 'Bold'}}>
                        Our Impact
                    </a>
                </li>
                <li className="p-8 text-2xl text-gray-800 flex items-center">
                    <a href="https://studentunion.berkeley.edu/" className="flex items-center text-white" style={{fontSize:20, fontWeight: 'Bold'}}>
                        Offices
                    </a>
                </li>
            </ul>
            <a className="basis-1/3 flex justify-center items-center text-2xl text-gray-800 font-bold">
            <SearchBar />
            </a>

            
        </nav> );
    
    
}

/*

*/