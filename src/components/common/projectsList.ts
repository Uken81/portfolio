interface ProjectObj {
  [keyName: string]: {
    keyName: string;
    title: string;
    subtitle?: string;
    text: string;
    links?: { site: string; github: string; demo: string };
  };
}

export interface Project {
  title: string;
  subtitle?: string;
  text: string;
  links?: { site: string; github: string; demo: string };
}

//When adding more projects with demo gifs make sure to upload the gif file to src/assets/demoImages then import to Demo.tsx and add a new case to the switch statement.
export const projects: ProjectObj = {
  gccm: {
    keyName: 'gccm',
    title: 'GCCM',
    text: '<b><i>The Project</i></b><br>Gurps Character Cheatsheet Maker is a desktop web app for users to create and manage character cheat sheets for the popular tabletop RPG Gurps.<br><br><b><i>Features</i></b><br>* Access descriptions of each advantage &nbsp;&nbsp;&nbsp;and disadvantage<br>* Save, access, modify and delete your &nbsp;&nbsp;&nbsp;cheat sheet in your user account<br>* Inbuilt PDF maker to save, print and share<br><br><b><i>Concepts</i></b><br><i>* Testing</i><br><i>* Authentication<i><br><i>* Global state management</i><br><br><b><i>Frontend Tools</i></b><br><i>* React</i><br><i>* Typescript</i><br><i>* Redux</i><br><i>* Jest/RTL</i><br><br><b><i>Backend Tools</i></b><br><i>* Firebase</i>',
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'gccm'
    }
  },
  garden: {
    keyName: 'garden',
    title: 'Garden Logger',
    text: '<b><i>The Project</i></b><br>The Garden Logger mobile app allows users to record information about their plants and track change over time using multiple sorting functions and views.<br><br><b><i>Features</i></b><br>* Take photos of your plants to track over &nbsp;&nbsp;&nbsp;time.<br>* Add notes and tags to monitor growth, &nbsp;&nbsp;&nbsp;disease and pest issues over time.<br>* Create garden areas that can then be &nbsp;&nbsp;&nbsp;categorised, grouped and sorted.<br>* Timeline view, filter by date ranges, tags, &nbsp;&nbsp;&nbsp;location and more.<br><br><b><i>Concepts</i></b><br><i>* Git Collaboration<i><br><i>* Global state management</i><br><i>* Mobile App Development</i><br><i>* Testing</i><br><br><b><i>Frontend Tools</i></b><br><i>* React Native</i><br><i>* Typescript</i><br><i>* Redux</i><br><i>* Jest/RTL</i>',
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'garden'
    }
  },
  welcome: {
    keyName: 'welcome',
    title: 'Welcome.',
    subtitle:
      'I’m Brendan Hurd.<br>Front End Developer | Self Taught | Melbourne, Australia',
    text: 'I’m passionate about creating high-quality, user-friendly code and am proficient in Typescript and integration testing.<br>I bring curiosity, a love of learning and an obsession with quality to my code and projects. '
  }
};
