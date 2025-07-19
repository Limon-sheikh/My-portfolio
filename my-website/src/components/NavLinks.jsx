
import List from "../data/List";

const NavLinks = () => {
    
    return (
         <>   
            <ul className="flex space-x-3 justify-center bg-white p-2">
                {List.map((link) => (
                    <li key={link.id}>
                        <a href={link.path} className="text-gray-700 p-2 inline-block duration-700">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
         </>       
    );
};

export default NavLinks;