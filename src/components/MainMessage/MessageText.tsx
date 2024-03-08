import React from 'react';
import { Project } from '../common/projects';

const Description: React.FC<{ descriptionText: string }> = ({ descriptionText }) => (
  <>
    <p>{descriptionText}</p>
  </>
);

const Features: React.FC<{ features?: string[] }> = ({ features }) => (
  <>
    <p className="my-1 font-bold">Features</p>
    <ul className="list-outside list-disc pl-4">
      {features?.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </>
);

const Concepts: React.FC<{ concepts?: string[] }> = ({ concepts }) => (
  <>
    {concepts ? (
      <div>
        <p className="my-1 font-bold">Concepts</p>
        <ul className="list-outside list-disc pl-4">
          {concepts?.map((concept: string) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>
      </div>
    ) : null}
  </>
);

const Tools: React.FC<{ tools?: string[] }> = ({ tools }) => (
  <>
    <p className="my-1 font-bold">Tools</p>
    <ul className="list-outside list-disc pl-4">
      {tools?.map((tool: string) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  </>
);

const Text: React.FC<{ project: Project }> = ({ project }) =>
  project.keyName !== 'welcome' ? (
    <div className="flex h-max flex-col xl:text-lg">
      <p className="mb-1 h-8 font-bold">The Project</p>
      <Description descriptionText={project.text.description} />
      <Features features={project.text.features} />
      <Concepts concepts={project.text.concepts} />
      <Tools tools={project.text.tools} />
    </div>
  ) : (
    <Description descriptionText={project.text.description} />
  );

export const MessageText: React.FC<{ project: Project }> = ({ project }) => (
  <Text project={project} />
);
