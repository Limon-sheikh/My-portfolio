
import Home from '../assets/lottie/Home.json';
import calling from '../assets/lottie/incoming call.json';
import message from '../assets/lottie/Atendimento.json';

export const sectionTitle = {
  title: "Let's Connect",
  description: "I’m available for collaborations, freelance work, and new opportunities.",
}

export const contactInfo = [
    {id:1, title:"Address :", animation: Home, text:"744 New York Ave, Brooklyn, Kings, New York 10224"},
    {id:2, title:"phone :", animation: calling, text:"+8801764866645 +8801518641623"},
    {id:3, title:"support :", animation: message, text:"limon.support@gmail.com limon@gmail.com"}
]


const contactFormData = {
  title: "Let's talk",
  subtitle: "Enter your project details",
  description: "Feel free to reach out for projects or collaboration",
  buttonText: "Send Message",
  fields: [
    {id: 1, name:"name", type:"text", width: "half",  placeholder:"Enter your name"},
    {id: 2, name:"email", type:"email", width: "half", placeholder:"Enter your email"},
    {id: 3, name:"subject", type:"text", width: "full", placeholder:"Enter your subject.."},
    {id: 4, name:"message", type:"textarea", width: "full", placeholder:"Write your message...", rows: 5},
  ],
};
export default contactFormData;
