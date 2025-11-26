
import { FaLaptopCode, FaPalette, FaBolt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa"; //testing perpuse
import { SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";  //testing perpuse

import { FaCode, FaPaintBrush, FaWordpress  } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";


export const serviceTitle = {
  offer: "WHAT WE OFFER",
  title: "Affordable Services",
  description:
    "A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies..",
};


export const cardData = [
  {
    id: "frontend",
    title: "Front-End Development",
    tagline: "Modern, responsive & high-performance websites",
    description:
      "I build clean, accessible and fast front-end apps using modern tools and best practices. I convert designs to pixel-perfect UI and deliver production-ready code.",
    tools: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
    ],
    features: [
      "Responsive & Mobile-first",
      "Pixel-perfect Figma/PSD to HTML",
      "SEO-friendly markup",
      "Cross-browser compatibility",
      "Clean, commented & maintainable code",
    ],
    deliverables: [
      "Source code (GitHub / Zip)",
      "Live demo / deployment link",
      "Setup & usage instructions",
    ],
    cta: {
      label: "View Projects",
      href: "#projects",
    },
    accent: "bg-yellow-200 text-yellow-700",
    icon: FaLaptopCode,
  },

  // Optional: add more service cards below if needed
  {
    id: "ui/ux",
    title: "UI / UX Implementation",
    tagline: "User-centered, accessible and modern interfaces",
    description:
      "I implement UI designs with careful attention to usability, accessibility and micro-interactions to improve engagement and user satisfaction.",
    tools: [
      { name: "Figma → HTML", icon: FaPalette }, // using FaPalette for visual
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "React", icon: SiReact },
    ],
    features: [
      "Accessible components (a11y)",
      "Micro-interactions & animations",
      "Design-to-code fidelity",
    ],
    deliverables: ["Component library", "Interactive prototypes", "Handoff docs"],
    cta: { label: "See Case Studies", href: "#case-studies" },
    accent: "bg-indigo-200 text-indigo-700",
    icon: FaPalette,
  },
];















// export const cardData = [
//   {
//     id: 1,
//     title: "Web Development",
//     description: "I build responsive and interactive websites using modern technologies ensuring high performance and clean UI.",
//     // image: "/images/web.png",
//     icon: FaCode,
//     iconColor: "#E2852E",
//   },
//   {
//     id: 2,
//     title: "Wordpress Customization",
//     description: "Custom and business-focused WordPress websites with full control & easy management for clients.",
//     // image: "/images/branding.png",
//     icon: FaWordpress,
//     // iconColor: "#FF7A00",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design",
//     description: "Clean and user-centric digital product design ensuring smooth user experience with modern layout.",
//     // image: "/images/design.png",
//     icon: FaPaintBrush,
//     iconColor: "#A259FF",
//   },
//   {
//     id: 4,
//     title: "Branding",
//     description: "Brand identity and creative assets",
//     // image: "/images/branding.png",
//     icon: SiSimilarweb,
//     iconColor: "#00D1F7",
//   }
// ];
