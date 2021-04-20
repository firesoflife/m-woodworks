import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project'] {
        title,
        slug,
        projectType,
        tags,
        description,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className='bg-blue-200 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center main-text'>
          Welcome to the Gallery
        </h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          Have a Look at Our Recent Work
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article>
                <Link
                  to={'/project/' + project.slug.current}
                  key={project.slug.current}
                >
                  <span
                    className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400'
                    key={index}
                  >
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 text-blue-100 bg-opacity-75 rounded'>
                        {project.title}
                      </h3>
                    </span>
                  </span>
                  <p className='flex justify-start pt-4 text-blue-700 leading-relaxed'>
                    {project.description}. Click for more images
                  </p>
                  <p>
                    <span className='font-bold'>Category: </span>
                    {project.projectType}
                  </p>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
