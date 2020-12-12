import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';

export default function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Projects Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to page of my projects
        </h2>
        <section className="grid md:grid-cols-2 lg;grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-300">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{' '}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{' '}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-lg"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View the project{' '}
                    <span role="img" aria-label="right pointer"></span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
