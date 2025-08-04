
import { Facebook, Github, Instagram, Linkedin, Youtube} from 'lucide-react';
// import Array from '../assets/array.jpeg'
// import Lm from '../assets/lm.jpg'

const heroData = [
  {
    id: 1,
    title: "Hello, I'm",
    titleName: "Limon sheikh",
    subtitle: "A Passionate",
    subtitleName: "Front-end Web Developer",
    description: "I design and build user-friendly websites using React.js, Tailwind CSS and modern technologies.",
    buttonText: "View My Work",
    image: "/assets/hero-image.png",

    // Social icons
    socials: [
      {
        name: "Github",
        icon: Github,
        link: "https://github.com/Limon-sheikh",
        color: '#24292e',
      },
      {
        name: "Linkedin",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/limonsheikh/",
        color: '#0072B1',
      },
      {
        name: "Facebook",
        icon: Facebook,
        link: "https://www.facebook.com/limonsheikh23",
        color: '#1877F2',
      },
      {
        name: "youtube",
        icon: Youtube,
        link: "#",
        color: '#FF0000',
      },
      {
        name: "instagram",
        icon: Instagram,
        link: "#",
        // color: '#FF0000',
      }
    ],
  }, 
];

export default heroData;
