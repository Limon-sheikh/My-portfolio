
import List from "../data/List";

const NavLinks = ({ isOpen }) => {

  console.log(open);

  return (
    <ul className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 md:bg-transparent md:static absolute top-20 left-0 w-full 
        md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex `}>
        {List.map((link) => (
            <li key={link.id}>
            <a href={link.path} 
              className="text-gray-700 hover:text-accent bg-accent rounded-md p-2 inline-block duration-300 w-full text-center font-bold">
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