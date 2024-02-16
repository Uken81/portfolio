export type ProjectName = 'sadbois' | 'gccm' | 'garden' | 'chance' | 'welcome';

interface ProjectsObj {
  [objectName: string]: {
    keyName: ProjectName;
    title: string;
    subtitle?: string;
    text: ProjectText;
    links?: { site?: string; github: string; demo: string };
  };
}

export interface Project {
  keyName: string;
  title: string;
  subtitle?: string;
  text: ProjectText;
  links?: { site?: string; github: string; demo: string };
}

interface ProjectText {
  description: string;
  features?: string[];
  concepts?: string[];
  tools?: string[];
}

//When adding more projects with demo gifs add its keyName property to the ProjectName type at the top of this file. Upload the gif file to src/assets/demoImages then import to Demo.tsx. In the same file add the keyName as a new key to the images object and the gif name as the value.
export const projects: ProjectsObj = {
  sadbois: {
    keyName: 'sadbois',
    title: 'The Sad Bois',
    text: {
      description:
        'A full stack responsive website for a fictional band built with Typescript for the front end and Node.js/Express for the back end.',
      features: [
        'Asynchronous fetch requests to communicate between the front-end and server, handles CRUD operations to manage application data',
        'PostgreSQL database manages and persist information related to Users, Customers, Store Orders, News Articles, and additional entities.',
        'Cookies facilitating the authentication of registered users, enabling them to access protected pages, view past store orders on their profile page, and more.',
        'Merchandise that processes order totals and verifies payment card details on the server side.'
      ],
      tools: [
        'Typescript',
        'Node.js/Express',
        'PostgreSQL',
        'MySQL',
        'Tailwind CSS',
        'React Context'
      ]
    }
  },
  gccm: {
    keyName: 'gccm',
    title: 'GCCM',
    text: {
      description:
        'Gurps Character Cheatsheet Maker is a desktop web app for users to create and manage character cheat sheets for the popular tabletop RPG Gurps.',
      features: [
        'Access descriptions of each advantage and disadvantage',
        'Save, access, modify and delete your cheat sheet in your user account',
        'Inbuilt PDF maker to save, print and share'
      ],
      concepts: ['Testing', 'User authentication', 'Global state management'],
      tools: ['React', 'Typescript', 'Redux Toolkit', 'SASS', 'Bootstrap', 'Jest/RTL', 'Firebase']
    },
    links: {
      site: 'https://gccm.brendanhurd.dev',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'gccm'
    }
  },
  garden: {
    keyName: 'garden',
    title: 'Garden Logger',
    text: {
      description:
        'The Garden Logger mobile app allows users to record information about their plants and track changes over time using multiple sorting functions and views.',
      features: [
        'Take photos of your plants to track over time.',
        'Add notes and tags to monitor growth, disease and pest issues.',
        'Create garden areas that can be categorised, grouped and sorted.',
        'Timeline view, filter by date ranges, tags, location and more.'
      ],
      concepts: [
        'Git Collaboration',
        'Mobile App Development',
        'Global state management',
        'Testing'
      ],
      tools: ['React Native', 'Typescript', 'Redux', 'Jest/RTL']
    },
    links: {
      github: 'https://github.com/Cliffsters-Inc/garden-manager-native',
      demo: 'garden'
    }
  },
  chance: {
    keyName: 'chance',
    title: 'Take a Chance',
    text: {
      description:
        'One of my much earlier projects. This simple game of chance is inspired by the browser games of long ago. I used this project to apply some of my first lessons in HTML, JS and CSS.',
      features: [
        'Fun intro story',
        'Choose from multiple difficulties',
        'Changeable background views',
        'Select bet amounts and take a chance'
      ],
      concepts: ['Random outcome generator', 'CSS animations', 'Ensuring game rlues compliance'],
      tools: ['HTML', 'Javascript', 'CSS']
    },
    links: {
      site: 'https://takeachance.brendanhurd.dev',
      github: 'https://github.com/Uken81/Take-a-Chance',
      demo: ''
    }
  },
  welcome: {
    keyName: 'welcome',
    title: 'Welcome.',
    subtitle: 'I’m Brendan Hurd.<br>Front End Developer | Melbourne, Australia',
    text: {
      description:
        'I’m passionate about creating high-quality, user-friendly code and am proficient in React, Typescript and integration testing. I bring curiosity, a love of learning and an obsession with quality to my code and projects.'
    }
  }
};
