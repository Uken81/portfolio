import React from 'react';
import { Project } from '../common/projectsList';

const Description: React.FC<{ descriptionText: string }> = ({
  descriptionText
}) => (
  <>
    <span>{descriptionText}</span>
  </>
);

const Features: React.FC<{ features?: string[] }> = ({ features }) => (
  <>
    <p className="mb-1 font-bold">Features</p>
    <ul className="list-outside list-disc pl-4">
      {features?.map((feature) => {
        return <li>{feature}</li>;
      })}
    </ul>
  </>
);

const Concepts: React.FC<{ concepts?: string[] }> = ({ concepts }) => {
  return (
    <>
      <p className="mb-1 font-bold">Concepts</p>
      <ul className="list-outside list-disc pl-4">
        {concepts?.map((concept: string) => (
          <li>{concept}</li>
        ))}
      </ul>
    </>
  );
};

const Text: React.FC<{ project: Project }> = ({ project }) =>
  project.keyName !== 'welcome' ? (
    <div className="flex h-max flex-col justify-between">
      <p className="mb-1 h-8 font-bold">The Project</p>
      <Description descriptionText={project.text.description} />
      <Features features={project.text.features} />
      <Concepts concepts={project.text.concepts} />
    </div>
  ) : (
    <Description descriptionText={project.text.description} />
  );

export const MessageText: React.FC<{ project: Project }> = ({ project }) => {
  console.log(project.title);
  return <Text project={project} />;
};
