export const skills = [
  "JavaScript, TypeScript, ReactJS, NextJS",
  "Redux, Redux Toolkit",
  "HTML5, CSS3, SASS, BootStrap, TailwindCSS",
  "NodeJS, MySQL, PHP",
  "Storybook, e2e tests",
];

export interface projectNamesFilter {
  name: string;
  dataFilter: string;
}

export const projectNames: projectNamesFilter[] = [
    {name: 'All projects', dataFilter: 'all'},
    {name: 'React JS + Vite JS', dataFilter: 'react'},
    {name: 'Next JS + TailwindCSS', dataFilter: 'next'},
];

export const experienceList = [
    {
      en: {
        title: "Capri Delivery Pizza",
        description: "React.JS + Vite.JS, module SCSS, redux, rtkQuery, axios.",
        duration: "Duration: 2 years and 9 months.",
        data: "From Jan 2021 to Oct 2023",
      },
      ru: {
        title: "Capri Доставка Пиццы",
        description: "React.JS + Vite.JS, module SCSS, redux, rtkQuery, axios.",
        duration: "Длительность: 2 года и 9 месяцев.",
        data: "От января 2021 до октября 2023",
      },
    },
    {
      en: {
        title: "Kyiv Construction Company",
        description: "Next.JS + TailwindCSS, TypeScript, routeHandler, axios, nodeMailer.",
        duration: "Duration: 8 months.",
        data: "From Oct 2023 to May 2024",
      },
      ru: {
        title: "Kyiv Construction Company",
        description: "Next.JS + TailwindCSS, TypeScript, routeHandler, axios, nodeMailer.",
        duration: "Длительность: 8 месяцев.",
        data: "От октября 2023 до мая 2024",
      },
    },
    {
      en: {
        title: "My project VB-delivery React.JS + Vite.JS",
        description: "React.JS + Vite.JS, module SCSS, redux, rtkQuery, axios.",
        duration: "Duration: 9 month.",
        data: "From Oct 2023 to May 2024",
      },
      ru: {
        title: "Мой проект VB-delivery React.JS + Vite.JS",
        description: "React.JS + Vite.JS, module SCSS, redux, rtkQuery, axios.",
        duration: "Длительность: 9 месяцев.",
        data: "От октября 2023 до мая 2024",
      },
    },
    {
      en: {
        title: "My Portoflio",
        description: "Next.JS + TailwindCSS, TypeScript.",
        duration: "Duration: 2 months.",
        data: "From March 2024 to May 2024",
      },
      ru: {
        title: "Мое Портфолио",
        description: "Next.JS + TailwindCSS, TypeScript",
        duration: "Длительность: 2 месяца.",
        data: "От марта 2024 до мая 2024",
      },
    },
  ];