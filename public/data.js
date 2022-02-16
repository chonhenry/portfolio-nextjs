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
      "A website that shows information of different cryptocurrencies. Users can also create an account to store their crypto portfolio.",
    image: cryptoapp,
  },
  {
    id: 3,
    name: "CSS Gallery",
    technologies: ["React", "Next.js", "Contentful"],
    github: "https://github.com/chonhenry/css-gallery",
    link: "https://css-gallery-peach.vercel.app",
    description: "A gallery website for CSS design.",
    image: css_gallery,
  },
  {
    id: 2,
    name: "Instagram Clone",
    technologies: ["React", "Redux", "MongoDB", "Express.js", "Node.js"],
    github: "https://github.com/chonhenry/instagram-clone",
    link: "https://hc-instagram-clone.herokuapp.com",
    description: "An Instagram clone built with the MERN stack.",
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
    image: chat_app,
  },
];

export { projects };
