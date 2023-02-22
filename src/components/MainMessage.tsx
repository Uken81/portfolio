interface Props {
  messageName: string;
}

export const MainMessage = ({ messageName }: Props) => {
  let title = '';
  let text = '';
  switch (messageName) {
    case 'gccm':
      title = 'GCCM';
      text =
        'Aliqua sunt culpa irure anim. Anim magna aliquip officia in ullamco non laborum laboris ullamco dolore ex. Reprehenderit nostrud duis consequat nisi enim ex sint ipsum laboris. Anim et ea duis veniam aute irure quis in. Exercitation quis eu consequat aliquip ut pariatur enim irure labore.';
      break;
    case 'garden':
      title = 'Garden Logger';
      text =
        'Mollit laboris nulla incididunt ullamco quis. Ex exercitation aliqua commodo consequat consectetur proident elit ullamco do. Anim laboris elit Lorem ullamco ea. Adipisicing fugiat occaecat minim ut laboris voluptate anim est. Ex sit irure proident ad ex ipsum incididunt ipsum veniam deserunt anim Lorem. Quis ea ut non ea nostrud exercitation duis. Excepteur eu ea occaecat eu fugiat sit.';
      break;
    default:
      title = 'Welcome';
      text =
        'Consectetur excepteur proident laboris incididunt laboris proident tempor aliqua id aliquip. Incididunt proident amet mollit anim voluptate. Qui incididunt officia ipsum cupidatat velit officia commodo ullamco deserunt incididunt ex reprehenderit. Veniam id adipisicing duis veniam reprehenderit eiusmod amet voluptate. Duis eiusmod veniam quis commodo nostrud adipisicing laborum. Do minim esse est tempor id commodo ex nisi irure minim.';
  }
  return (
    <div className="mr-72 flex flex-col">
      <h1 className="mb-5 text-6xl text-blue-500">{title}</h1>

      <span className="border-l-4 pl-2">{text}</span>
    </div>
  );
};
