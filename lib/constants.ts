import { Content, SideNavItem } from "./types";
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About Me",
    path: "/about",
  },
  {
    title: "Education",
    path: "/education",
  },
  {
    title: "Work Experience",
    path: "/experience",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Certifications",
    path: "/certifications",
  },
];

export const EDUCATION: Content = {
  title: "Education",
  items: [
    {
      primaryHeading:
        "National University of Science Technology (NUST), Islamabad",
      secondaryHeading: "Bachelor's in Computer Science",
      description: [
        "CGPA: 3.83/4.00",
        "Ranked 4th out of 129 students",
        "Awarded GPA Based Scholarship in 4 out of 8 semesters",
        "Awarded Rector's Gold Medal for Best Final Year Project (FYP)",
        "Core Courses: Object Oriented Programming, Data Structures & Algorithms, Database Systems, Web Development, Software Engineering, Operating Systems, Computer Networks, Artificial Intelligence, Deep Learning, Distributed Computing, Theory of Automata, Compiler Construction, Computer Architecture",
      ],
      date: "2018-2022",
    },
  ],
};

export const EXPERIENCE: Content = {
  title: "Work Experience",
  items: [
    {
      primaryHeading: "Software Engineer",
      secondaryHeading: "INTECH Process Automation Inc.",
      description: [
        "Deployed and managed Kubernetes clusters and Docker containers for seamless, high-availability operations across multiple environments",
        "Deployed applications to Azure, ensuring cost-effective solutions while maintaining industry standards for compliance and best practices",
        "Designed and implemented automated CI/CD pipelines on BitBucket and ArgoCD",
        "Implemented Infrastructure as Code with Pulumi for faster and easily maintainable deployments",
        "Provided production support for bug triage, analysis and resolution",
        "Introduced Git Flow branching strategy for streamlining releases",
      ],
      date: "July 2022 - Present",
    },
    {
      primaryHeading: "Trainee Software Engineer",
      secondaryHeading: "BrinySoft",
      description: [
        "Acquired practical proficiency in HTML, CSS, and Bootstrap through hands-on experience, crafting visually appealing and responsive websites",
        "Received training in mobile application development in Flutter and integration with Firebase",
      ],
      date: "August 2021 - April 2022",
    },
    {
      primaryHeading: "React Native Intern",
      secondaryHeading: "Allied Consultants",
      description: [
        "Utilized React Native for a mobile application for delivery drivers",
        "Identified and rectified a critical bug in the existing code base, ensuring enhanced stability",
        "Implemented the notifications feature and Google Maps navigation in the application",
      ],
      date: "June 2020 - August 2022",
    },
  ],
};

export const PROJECTS: Content = {
  title: "Projects",
  items: [
    {
      primaryHeading: "Portfolio Website",
      description: [
        "Developed a personal portfolio website using React and Next.js",
        "Implemented a responsive design using CSS Grid and Flexbox",
        "Deployed the website on Vercel for hosting",
      ],
      date: "2022",
    },
    {
      primaryHeading: "E-commerce Website",
      description: [
        "Developed an e-commerce website using React and Redux",
        "Implemented features like product listing, cart management, and checkout",
        "Used Firebase for authentication and database management",
      ],
      date: "2021",
    },
    {
      primaryHeading: "Task Management App",
      description: [
        "Developed a task management application using React and Redux",
        "Implemented features like task creation, editing, and deletion",
        "Used Local Storage for data persistence",
      ],
      date: "2020",
    },
  ],
};

export const SKILLS: Content = {
  title: "Skills",
  items: [
    {
      primaryHeading: "Programming Languages",
      description: ["JavaScript, TypeScript, Python, Java, C++"],
      date: "",
    },
    {
      primaryHeading: "Frontend Development",
      description: ["React, Redux, Next.js, Angular, HTML, CSS, SASS"],
      date: "",
    },
    {
      primaryHeading: "Backend Development",
      description: ["Node.js, Express, MongoDB, Firebase, REST APIs"],
      date: "",
    },
  ],
};
