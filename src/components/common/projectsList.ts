export type ProjectName = 'gccm' | 'garden' | 'welcome';

interface ProjectObj {
  [objectName: string]: {
    keyName: ProjectName;
    title: string;
    subtitle?: string;
    text: ProjectText;
    links?: { site: string; github: string; demo: string };
  };
}

export interface Project {
  keyName: string;
  title: string;
  subtitle?: string;
  text: ProjectText;
  links?: { site: string; github: string; demo: string };
}

interface ProjectText {
  description: string;
  features?: string[];
  concepts?: string[];
  tools?: string[];
}

//When adding more projects with demo gifs add its keyName property to the ProjectName type at the top of this file. Upload the gif file to src/assets/demoImages then import to Demo.tsx. In the same file add the keyName as a new key to the images object and the gif name as the value.
export const projects: ProjectObj = {
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
      concepts: ['Testing', 'Authentication', 'Global state management'],
      tools: ['React', 'Typescript', 'Redux', 'Jest/RTL', 'Firebase']
    },
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'gccm'
    }
  },
  garden: {
    keyName: 'garden',
    title: 'Garden Logger',
    text: {
      description:
        'The Garden Logger mobile app allows users to record information about their plants and track change over time using multiple sorting functions and views.',
      features: [
        'Take photos of your plants to track over time.',
        'Add notes and tags to monitor growth, disease and pest issues over time.',
        'Create garden areas that can then be categorised, grouped and sorted.',
        'Timeline view, filter by date ranges, tags, location and more.'
      ],
      concepts: [
        'Git Collaboration',
        'Global state management',
        'Mobile App Development',
        'Testing'
      ],
      tools: ['React Native', 'Typescript', 'Redux', 'Jest/RTL']
    },
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'garden'
    }
  },
  welcome: {
    keyName: 'welcome',
    title: 'Welcome.',
    subtitle: 'I’m Brendan Hurd.<br>Front End Developer | Self Taught | Melbourne, Australia',
    text: {
      description:
        'I’m passionate about creating high-quality, user-friendly code and am proficient in Typescript and integration testing. I bring curiosity, a love of learning and an obsession with quality to my code and projects.'
    }
  }
};
