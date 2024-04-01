import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  aboutMe = `Hi. I'm Akhil. I'm a Full Stack web developer with a passion for Frontend web development.
            I'm commited to building and delivering captivating modern websites.
            With a proactive approach to problem-solving, I’m dedicated to making a positive impact.
            Let's connect and explore how we can collaborate to achieve our goals together.`

  experiences = [
    {
      title: 'Web Application Developer',
      subtitle: 'University of Illinois Chicago',
      content: `Led the end-to-end creation of a groundbreaking application that significantly streamlined healthcare service
      providers' ability to assess clients' life priorities. Engineered an intuitive application utilizing drag-and-drop functionality on a 2D grid, facilitating user-friendly
      card placement and rearrangement, enhanced with captivating animations and advanced logic to ensure a
      seamless experience.`,
      start: "May 2023",
      end: "Dec 2023"
    },
    {
      title: 'Software Developmer',
      subtitle: 'MoveInSync Technology Solutions',
      content: `Contributed to a project with a daily user base of over 500,000 by developing responsive pages using Angular
      and cloud-based infrastructure, enhancing user engagement and satisfaction. Implemented a sophisticated meeting space reservation feature, simplifying the process of inviting attendees
      with real-time availability updates. `,
      start: "Aug 2021",
      end: "June 2022"
    },
    {
      title: 'Software Development Intern',
      subtitle: 'National Informatics Centre (NIC)',
      content: `Coordinated a project connecting farmers and traders with a vast logistics network of over 500,000 trucks and
      20,000 tractors, improving market access and distribution efficiency. Developed a web application for visualizing location-based shifts in crop demand and forecasting vehicle
      requirements on a regional scale, facilitating strategic planning and resource allocation in the agricultural sector.`,
      start: "June 2021",
      end: "July 2021"
    },
  ]

  projects = [
    {
      title: 'Catan Random Board Generator',
      subtitle: 'Angular',
      content: 'Random Board Generator to enhance gameplay fairness and reduce setup conflicts.',
      url: 'https://catanboardgenerator.netlify.app/'
    },
    {
      title: 'Tesla Dashboard UI',
      subtitle: 'Angular',
      content: 'Enhancing Learnability, Efficiency, and Safety of Tesla Dashboard UI.',
      url: 'https://grishmant.github.io/TeslaDashboardUI/'
    },
    {
      title: 'Crop Recommendation System',
      subtitle: 'Javascript, Flask',
      content: 'Interactive web app for accurate crop rotation suggestions.'
    },
    {
      title: 'My Community',
      subtitle: 'Javascript, MySQL',
      content: 'A web app that connects local businesses within the community.',
    },
  ]

}
