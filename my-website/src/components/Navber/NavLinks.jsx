
import { Link } from "react-router-dom";
import mainMenu from "../../data/mainMenu";

const NavLinks = ({ className, onLinkClick }) => {
  // ${isOpen ? 'block' : 'hidden'}
    return (
      <ul className={`transition-all duration-300 ease-in-out md:flex-row md:items-center md:static md:w-auto md:p-0 md:gap-0 lg:gap-5   md:flex ${className} `}>
        {mainMenu.map((link) => (
            <li key={link.id}>
            <Link to={link.path} onClick={onLinkClick}
              className="py-2 px-4 inline-block text-center font-semibold text-md text-secondary hover:text-accent 
              transition-all duration-200 md:bg-transparent md:p-2 lg:text-lg">
              {link.name}
            </Link>
            </li>
        ))}
    </ul>
  );
};

export default NavLinks;