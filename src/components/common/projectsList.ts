interface ProjectObj {
  [keyName: string]: {
    keyName: string;
    title: string;
    text: string;
    links?: { site: string; github: string; demo: string };
  };
}

export interface Project {
  title: string;
  text: string;
  links?: { site: string; github: string; demo: string };
}

//When adding more projects with demo gifs make sure to upload the gif file to src/assets/demoImages then import to Demo.tsx and add a new case to the switch statement.
export const projects: ProjectObj = {
  gccm: {
    keyName: 'gccm',
    title: 'GCCM',
    text: 'Create and manage digital cheatsheets for your Gurps characters with ease. Designed for players of the popular tabletop RPG Gurps, the Gurps Character Cheatsheet Maker allows you to access clear descriptions of the advantages and disadvantages chosen for your character.<br>With GCCM you can save your cheatsheets to a user account and easily access, modify, and delete them. The inbuilt PDF maker then lets you create digital copies of your cheatsheets to share with other players and the Game Master, providing a quick and detailed reference during gameplay.<br><br><b><i>Concepts</i></b><br><i>* Testing</i><br><i>* Authentication<i><br><i>* Global state management</i><br><br><b><i>Frontend Tools</i></b><br><i>* React</i><br><i>* Typescript</i><br><i>* Redux</i><br><i>* Jest/RTL</i><br><br><b><i>Backend Tools</i></b><br><i>* Firebase</i>',
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'gccm'
    }
  },
  garden: {
    keyName: 'garden',
    title: 'Garden Logger',
    text: 'Garden Logger is a mobile application designed for gardeners who want to track changes in their garden over time. With this app, users can take pictures of their flowers and vegetables, add notes and tags to monitor growth, and stay on top of disease and pest issues.<br>Gardening areas can be created, subcategorised, grouped and sorted allowing you to quickly and efficiently focus on specific zones with ease.<br>Users can view their logs in a timeline, filtered by date ranges, locations, tags, and more. You can easily see the progress of your garden, the changes in plant growth, and any issues that arise.<br><br><b><i>Concepts</i></b><br><i>* Git Collaboration<i><br><i>* Global state management</i><br><i>* Mobile App Development</i><br><i>* Testing</i><br><br><b><i>Frontend Tools</i></b><br><i>* React Native</i><br><i>* Typescript</i><br><i>* Redux</i><br><i>* Jest/RTL</i>',
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'garden'
    }
  },
  welcome: {
    keyName: 'welcome',
    title: 'Welcome.',
    text: 'My name is Brendan Hurd, im a self taught front end developer based in Melbourne, Australia. Duis eiusmod veniam quis commodo nostrud adipisicing laborum. Do minim esse est tempor id commodo ex nisi irure minim.'
  }
};
