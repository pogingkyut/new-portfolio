import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kone,
  topi,
  arw,
  mattex,
  python,
  django,
  profile,
  blog,
  inventory,
  portfolio,
  todoapp,
  webscrape,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
];

const experiences = [
  {
    title: "Repair Tech",
    company_name: "KPI Elevators Inc",
    icon: kone,
    iconBg: "#383E56",
    date: "September 2019 - Present",
    points: [
      "Major repair for elevator and escalator",
      "Testing and commissioning",
      "Rebuild",
    ],
  },
  {
    title: "ERE Tech",
    company_name: "Transitions Optical Philippines Inc",
    icon: topi,
    iconBg: "white",
    date: "July 2017 - September 2019",
    points: [
      "Spareparts lifespan tracking",
      "Data gathering and analysis",
      "Preventive maintenance for production machineries",
      "Parts failure analysis, Root cause analysis",
      "CMMS admin",
    ],
  },
  {
    title: "Mechanical Tech",
    company_name: "Ahmad Al Tazi Rockwool Factory",
    icon: arw,
    iconBg: "#383E56",
    date: "March 2016 - Mar 2017",
    points: [
      "Installation of Cupola and rockwool assembly machine",
      "Line maintenance, monitoring, troubleshooting and repair",
      "Overall incharge in mechanical team",
    ],
  },
  {
    title: "Mechanical Tech",
    company_name: "Mattex Dubai LLC",
    icon: mattex,
    iconBg: "#E6DEDD",
    date: "April 2012 - October 2014",
    points: [
      "Line monitoring, data gathering, machine inspection",
      "Preventive maintenance of plastic extrusion machineries, winding machineries, HVAC equipments",
      "BMS monitoring and control",
      "Rebuild and repair of motors, rollers, and rolling equipments",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Testimonial part",
    name: "Name",
    designation: "Position",
    company: "Company",
    image: profile,
  },
  {
    testimonial: "Testimonial part",
    name: "Name",
    designation: "Position",
    company: "Company",
    image: profile,
  },
  {
    testimonial: "Testimonial part",
    name: "Name",
    designation: "Position",
    company: "Company",
    image: profile,
  },
];

const projects = [
  {
    name: "Blog App",
    description:
      "Web-based platform that allows user to post, update, delete, comment, like a post of other users blog",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/",
  },
  {
    name: "Webscrape App",
    description:
      "Web application that does automation in data gathering of my personal payroll records, create a csv table and make screenshot of my personal payslip",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: webscrape,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description: "A reactjs app with 3D animation using threejs",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "TodoApp",
    description:
      "A reactjs frontend web app with django backend that allows user to create, modify and delete a task",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Inventory App",
    description:
      "A Django web app that allows user to add, update, delete, manage tools for repair team",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
