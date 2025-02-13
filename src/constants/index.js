import project1 from "../assets/projects/ps1.png";
import project2 from "../assets/projects/ps2.png";
import project3 from "../assets/projects/ps3.png";
import project4 from "../assets/projects/ps4.png";

export const HERO_CONTENT = `I’m a passionate Front-End Developer with hands-on experience in React.I enjoy building user-friendly and dynamic web applications. Im excited to use my skills to create great user experiences and contribute to innovative projects`;
export const ABOUT_TEXT = `I completed my B.Tech in Computer Science in 2022. After that, I completed an internship at Thrymr, where I gained valuable industry experience. I then secured a position as a web developer at Icontech Projects and Services Pvt Ltd, and over the past year, I have further developed my skills and contributed to various projects.`;

export const EXPERIENCES = [
  {
    year: "2022 ",
    mo:"April",
    yr:"2023",
    role: "Software Developer - Trainee",
    company: "Thrymr Software Pvt Ltd",
    description: `I completed a six-month internship at Thrymr Software Pvt Ltd, where I worked on Angular projects under my senior's guidance and collaborated with a team.

`,
    technologies: ["Javascript", "Angular", "Html", "CSS"],
  },
  {
    year: "2023",
    mo:"July",
    yr:"2024",
    role: " Web Developer ",
    company:  "Icontech Projects And Services pvt ltd",
    description: `I worked as a web developer at Icontech Projects and Services Pvt Ltd for one year. My main responsibilities included designing websites based on client requirements and interacting with clients to ensure their needs were met`,
    technologies: ["HTML", "CSS", "javascript"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Virtual R",
    projectLink:'https://landing-page-gray-two-37.vercel.app/',
    image: project1,
    description:
      "The website Virtual R  is created using React and hosted on Vercel. It is a simple, responsive landing page with a clean design, likely used for showcasing a product or service, with a focus on user engagement and easy navigation.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "developer's kitchen ",
    projectLink:'https://dev-kitchen.vercel.app/',
    image: project2,
    description:
      "The website Dev Kitchen is built using HTML, CSS, Bootstrap, and JavaScript. It likely serves as a modern, responsive platform, showcasing content or services with a clean and user-friendly design, utilizing Bootstrap for layout and styling, along with JavaScript for interactive features.",
    technologies: ["HTML", "CSS", "bootstrap 5"],
  },
  {
    title: "Vastu Heaven",
    projectLink:'https://vastu-heaven-xqky.vercel.app/',
    image: project3,
    description:
      "The website  Vastu Heaven is built using React and is hosted on Vercel. It provides information and services related to Vastu Shastra, helping users design spaces like homes or offices according to Vastu principles for better energy flow and harmony.",
    technologies: ["HTML", "CSS", "React", "tailwind"],
  },
  {
    title: "Dashboard",
    image: project4,
    description:
      "This dashboard is a web page that displays important information in a visual format. It includes charts or graphs, like line graphs, bar charts, or pie charts, to help users quickly understand data. The React framework helps in making the dashboard interactive, so users can see updated data in real-time or when they interact with the page.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind"],
  },
];

export const CONTACT = {
  // address: "Hyderabad, Telangana ",
  phoneNo: "",
  email: "poojags2805@gmail.com",
};
