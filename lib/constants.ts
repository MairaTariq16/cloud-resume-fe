import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp, IoPersonCircleSharp } from "react-icons/io5";
import { AboutInfoItem, Content, SideNavItem } from "./types";
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

export const ABOUT_SUMMARY: string = `I am a proactive DevOps Engineer with expertise in deploying and managing Kubernetes clusters and Docker containers. I have successfully implemented Infrastructure as Code (IaC) using Pulumi, automating the setting up of infrastructure on Azure, which resulted in significant increase in deployment efficiency. Additionally, I have managed Kubernetes clusters; both on-premise and on Azure Kubernetes Service (AKS), ensuring smooth operations and optimal resource utilization. I have successfully utilized Bitbucket Pipelines and ArgoCD to establish automated CI/CD pipelines, streamlining the deployment process and enhancing development productivity.`;
export const ABOUT_INFO: AboutInfoItem[] = [
  {
    value: "Maira Tariq",
    icon: IoPersonCircleSharp,
  },
  {
    value: "mairatariq.me",
    icon: FaGlobe,
    link: "https://mairatariq.me",
  },
  {
    value: "Lahore, Pakistan",
    icon: IoLocationSharp,
  },
  {
    value: "/in/maira-tariq16",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/maira-tariq16",
  },
  {
    value: "MairaTariq16",
    icon: FaGithub,
    link: "https://github.com/MairaTariq16",
  },
  {
    value: "maira.t.tariq@gmail.com",
    icon: HiOutlineMail,
    link: "mailto:maira.t.tariq@gmail.com",
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
        "Deployed and managed Azure infrastructure for web applications, including App Services, Kubernetes Services and OpenAI",
        "Maintained Kubernetes clusters in air-gapped environments with minimal downtime",
        "Increased reliability of on premise systems by implementing backup and disaster recovery solution using Acronis Cyber Protect",
        "Automated infrastructure provisioning in Azure with Pulumi for IaC, reducing time to set up new environments by ~70%",
        "Utilized Docker to containerize applications",
        "Designed and implemented automated CI/CD process with BitBucket Pipelines and ArgoCD, making deployments faster by ~85% and reducing manual errors",
        "Provided production support for critical bug triage, analysis and resolution",
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
      primaryHeading: "Personal Portfolio Website",
      secondaryHeading: "Cloud Resume Challenge - Azure",
      secondaryLink:
        "https://cloudresumechallenge.dev/docs/the-challenge/azure/",
      description: [
        "Developed a complete end-to-end solution, from code development to continuous deployment",
        "Created personal resume website using Next.js and Tailwind CSS",
        "Implemented CI/CD pipelines with GitHub Actions for automated deployment to Azure Static Web Apps",
        "Used Terraform for Infrastructure as Code (IaC) to deploy resources on Azure",
      ],
      date: "2024",
    },
    {
      primaryHeading:
        "Urdu to Pakistan Sign Language (PSL) Application Prototype",
      secondaryHeading: "Final Year Project",
      description: [
        "Prototype developed using Flutter, Flask and OpenPose",
        "Prepared dataset of Urdu sentences and their corresponding PSL sentences",
      ],
      date: "2022",
    },
  ],
};

export const SKILLS: Content = {
  title: "Skills",
  items: [
    {
      primaryHeading: "Containerization and Orchestration",
      description: ["Kubernetes, Docker, Azure Kubernetes Service (AKS)"],
    },
    {
      primaryHeading: "Cloud Platforms",
      description: ["Azure (AKS, App Services)"],
    },
    {
      primaryHeading: "CI/CD tools",
      description: ["Bitbucket Pipelines, ArgoCD"],
    },
    {
      primaryHeading: "Infrastructure as Code",
      description: ["Pulumi, Terraform (Basic)"],
    },
    {
      primaryHeading: "Programming and Scripting Languages",
      description: ["TypeScript, Python, Bash "],
    },
    {
      primaryHeading: "Operating Systems",
      description: ["Linux (Ubuntu, CentOS)"],
    },
  ],
};

export const CERTIFICATIONS: Content = {
  title: "Certifications",
  items: [
    {
      primaryHeading:
        "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      primaryLink:
        "https://learn.microsoft.com/en-us/users/mairatariq-6689/credentials/7531abfa5f36b424",
      date: "August 2023",
    },
  ],
};
