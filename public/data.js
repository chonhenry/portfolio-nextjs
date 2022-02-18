import css_gallery from "../public/project-images/css-gallery.png";
import ig_clone from "../public/project-images/ig_clone.png";
import chat_app from "../public/project-images/react-chat.png";
import cryptoapp from "../public/project-images/cryptoapp.png";
import trello_clone from "../public/project-images/trello-clone.png";

const projects = [
  {
    id: 5,
    name: "Trello Clone",
    technologies: [
      "React",
      "Typescript",
      "Tailwind-CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    github: "https://github.com/chonhenry/trello-clone",
    link: "https://vigorous-lamport-7e0df0.netlify.app/",
    description: "A Trello clone built with the MERN stack.",
    details:
      "A Trello clone built with the MERN stack. Users can create a board that contains cards and column with drag and drop functionality. The drag and drop functionality is implemented using the React Beautiful DND library",
    image: trello_clone,
  },
  ,
  {
    id: 4,
    name: "Cryptocurrency App",
    technologies: ["React", "Redux", "Typescript", "Tailwind-CSS", "Firebase"],
    github: "https://github.com/chonhenry/cryptoapp",
    link: "https://amazing-jones-151340.netlify.app/",
    description:
      "A cryptocurrency tracker with a view of the markets, portfolio and news.",
    details:
      "A cryptocurrency tracker with a view of the markets, portfolio and news. Users can create an acccount and create their crypto portfolio. Crypto data is provided by Coinranking. News data is provided by the New York Times API.",
    image: cryptoapp,
  },
  {
    id: 3,
    name: "CSS Gallery",
    technologies: ["React", "Next.js", "Contentful"],
    github: "https://github.com/chonhenry/css-gallery",
    link: "https://css-gallery-peach.vercel.app",
    description: "A gallery website for CSS design.",
    details:
      "A gallery website for CSS design. User can browse different designs and copy the html and css code.",
    image: css_gallery,
  },
  {
    id: 2,
    name: "Instagram Clone",
    technologies: ["React", "Redux", "MongoDB", "Express.js", "Node.js"],
    github: "https://github.com/chonhenry/instagram-clone",
    link: "https://hc-instagram-clone.herokuapp.com",
    description: "An Instagram clone built with the MERN stack.",
    details: "An Instagram clone built with the MERN stack.",
    image: ig_clone,
  },
  {
    id: 1,
    name: "Realtime Chat App",
    technologies: ["React", "Redux", "Firebase"],
    github: "https://github.com/chonhenry/react-chat",
    link: "https://react-chat-my-app.herokuapp.com/login",
    description:
      "A real time chat application that allows users to send and receive real-time messages.",
    details:
      "A real time chat application that allows users to send and receive real-time messages.",
    image: chat_app,
  },
];

export { projects };
