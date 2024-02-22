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
      title: 'Title Developer',
      subtitle: 'Subtitle, Subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      start: "2021",
      end: "2022"
    },
    {
      title: 'Title Developer',
      subtitle: 'Subtitle, Subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      start: "2021",
      end: "2022"
    },
    {
      title: 'Title Developer',
      subtitle: 'Subtitle, Subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      start: "2021",
      end: "2022"
    },
    {
      title: 'Title Developer',
      subtitle: 'Subtitle, Subtitle',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      start: "2021",
      end: "2022"
    },
  ]

  projects = [
    {
      title: 'Tesla Dashboard UI',
      subtitle: 'Angular',
      content: 'Enhancing Learnability, Efficiency, and Safety of Tesla Dashboard UI.',
      url: 'hee'
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
      url: 'hee'
    },
  ]

}
