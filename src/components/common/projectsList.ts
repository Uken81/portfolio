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

export const projects: ProjectObj = {
  gccm: {
    keyName: 'gccm',
    title: 'GCCM',
    text: 'Aliqua sunt culpa irure anim. Anim magna aliquip officia in ullamco non laborum laboris ullamco dolore ex.<b>Reprehenderit</b><br/> nostrud duis consequat nisi enim ex sint ipsum laboris. Anim et ea duis veniam aute irure quis in.<br/> Exercitation quis eu consequat aliquip ut pariatur enim irure labore.',
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'gccm'
    }
  },
  garden: {
    keyName: 'garden',
    title: 'Garden Logger',
    text: 'Mollit laboris nulla incididunt ullamco quis. Ex exercitation aliqua commodo consequat consectetur proident elit ullamco do. Anim laboris elit Lorem ullamco ea. Adipisicing fugiat occaecat minim ut laboris voluptate anim est. Ex sit irure proident ad ex ipsum incididunt ipsum veniam deserunt anim Lorem. Quis ea ut non ea nostrud exercitation duis. Excepteur eu ea occaecat eu fugiat sit.',
    links: {
      site: 'https://pensive-goldstine-f0979f.netlify.app/',
      github: 'https://github.com/Uken81/GCCM-Redux/tree/main',
      demo: 'garden'
    }
  },
  welcome: {
    keyName: 'welcome',
    title: 'Welcome.',
    text: 'Consectetur excepteur proident laboris incididunt laboris proident tempor aliqua id aliquip. Incididunt proident amet mollit anim voluptate. Qui incididunt officia ipsum cupidatat velit officia commodo ullamco deserunt incididunt ex reprehenderit. Veniam id adipisicing duis veniam reprehenderit eiusmod amet voluptate. Duis eiusmod veniam quis commodo nostrud adipisicing laborum. Do minim esse est tempor id commodo ex nisi irure minim.'
  }
};
