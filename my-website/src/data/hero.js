
import { Facebook, Github, Instagram, Linkedin, Youtube} from 'lucide-react';
import heroImage from '../assets/image/sass-removebg-preview.png';


const heroData = [
  {
    id: 1,
    hello: "Hello, ",
    limon: "I'm Limon",
    sheikh: "sheikh",
    title: "A Passionate",
    titleName: "Front-end Web Developer",
    description: "I design and build user-friendly websites using React.js, Tailwind CSS and modern technologies.",
    buttonText: "View My Work",
    image:heroImage,

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
  }
];

export default heroData;
