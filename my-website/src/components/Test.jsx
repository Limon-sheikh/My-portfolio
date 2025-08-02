import heroData from "../data/hero";
const { socials } = heroData[0];
const Test = () => {

     return (
      <div className="relative z-10 flex justify-center h-full text-center px-4">
        {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black text-2xl"
            title={social.name}
          >
            <Icon /> {/* Render the icon as component */}
          </a>
        );
      })}
      </div>
  );
};

export default Test;