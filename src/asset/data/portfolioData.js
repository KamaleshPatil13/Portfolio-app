import expenseTrackerImg1 from "../Images/Expense-Tracker-1.png";
import crudapp from "../Images/crud-app1.png";
import cypresstesting from "../Images/cypress-testing.png";
import dashboard from "../Images/Dashboard.png";

const portfolio = [
  {
    id: "01",
    imageURL: expenseTrackerImg1,
    category: "Expense Tracker",
    title: "Expense Tracker Website",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["React js", "Context API"],
    siteURL: "https://kamaleshpatil13.github.io/Expense-Tracker/",
  },
  {
    id: "02",
    imageURL: crudapp,
    category: "CRUD APP",
    title: "Perform CRUD operation",
    description:
      "Developed a dynamic UI with searchable celebrity lists, accordion-based user details, real-time validation, and edit/delete functionality for adult users. Implemented data fetching, age calculation, and structured input fields for a seamless user experience.",
    technologies: ["React js", "Material UI"],
    siteURL: "https://66b7e092e930a1a0e4459358--kaleidoscopic-dragon-c50dc4.netlify.app/",
  },
  {
    id: "03",
    imageURL: cypresstesting,
    category: "Cypress",
    title: "Perform Cypress Testing",
    description:
      "This project contains end-to-end (E2E) tests for the OpenSourceHRM website, created using Cypress testing framework. These tests help ensure that key functionalities and user interactions on the site work as expected, providing reliable and automated validation.",
    technologies: ["Cypress"],
    siteURL: "https://github.com/KamaleshPatil13/Cypress-End-to-End-Test",
  },
  {
    id: "04",
    imageURL: dashboard,
    category: "Dashboard",
    title: "Created a Modern Dashboard",
    description:
      "A modern and responsive dashboard built with React.js, TypeScript, and Tailwind CSS. This project demonstrates a variety of UI components and functionalities commonly used in dashboard applications.",
    technologies: ["React JS", "TypeScript", "Tailwind CSS"],
    siteURL: "https://66b39913c934e0154dd6f910--hilarious-tapioca-4f3019.netlify.app/",
  },
];

export default portfolio;
