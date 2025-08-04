
import List from "../data/List";

const NavLinks = ({ isOpen }) => {

  console.log(open);

  return (
    <ul className={`flex flex-col p-4 absolute top-20 left-0 w-full gap-2 transition-all duration-300 ease-in-out bg-white
        md:flex-row md:items-center md:bg-transparent md:static md:w-auto md:p-0 md:gap-0 lg:gap-5 ${isOpen ? 'block' : 'hidden'} md:flex `}>
        {List.map((link) => (
            <li key={link.id}>
            <a href={link.path} 
              className="text-gray p-4 hover:text-accent bg-accent rounded-md inline-block duration-300 w-full text-center 
              font-semibold text-md md:bg-transparent md:p-2 lg:text-lg">
              {link.name}
            </a>
            </li>
        ))}
    </ul>
  );
};

export default NavLinks;


























// import List from "../data/List";

// const NavLinks = () => {
    
//     return (
//          <>   
//             <ul className="flex space-x-3 justify-center bg-white p-2">
//                 {List.map((link) => (
//                     <li key={link.id}>
//                         <a href={link.path} className="text-gray-700 p-2 inline-block duration-700">
//                             {link.name}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//          </>       
//     );
// };

// export default NavLinks;