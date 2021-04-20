// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import sanityClient from '../client';
// import imageUrlBuilder from '@sanity/image-url';
// import BlockContent from '@sanity/block-content-to-react';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

// export default function SingleProject() {
//   const [SingleProject, setSingleProject] = useState(null);
//   const { slug } = useParams();

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[slug.current == '${slug}'] {
//       title,
//       _id,
//       slug,
//       mainImage {
//         asset->{
//           _id,
//           url
//         }
//       },
//       body,
//       'name': project->name,
//       'projectImage': project->image
//     }`
//       )
//       .then((data) => setSingleProject(data[0]))
//       .catch(console.error);
//   }, [slug]);

//   if (!SingleProject) return <div>Loading ...</div>;

//   return (
//     <main className='bg-gray-200 min-h-screen p-12'>
//       <article className='container shadow-lg mx-auto bg-blue-200 rounded-lg'>
//         <header className='relative'>
//           <div className='absolute h-full w-full flex items-center justify-center p-8'>
//             <div className='bg-white bg-opacity-75 rounded p-12'>
//               <h1 className='main-text text-3xl lg:text-6xl mb-4'>
//                 {SingleProject.title}
//               </h1>
//               <div className='flex justify-center text-gray-800'>
//                 <img
//                   src={urlFor(SingleProject.projectImage).url()}
//                   alt={SingleProject.name}
//                   className='w-10 h-10 rounded-full'
//                 />
//                 <p className='main-text flex items-center pl-2 text-2xl'>
//                   {SingleProject.name}
//                 </p>
//               </div>

//               <img
//                 src={SingleProject.mainImage.asset.url}
//                 alt={SingleProject.title}
//                 className='w-full object-cover rounded-t'
//                 style={{ height: '400px' }}
//               />
//             </div>
//           </div>
//         </header>
//         <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-x max-w-full'>
//           <BlockContent
//             blocks={SingleProject.body}
//             projectId='t2onm8nt'
//             dataset='production'
//           />
//         </div>
//       </article>
//     </main>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleProject() {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          images{
            asset->{
              _id,
                url
            }
          },
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleProject) return <div>Loading...</div>;

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <article className='container shadow-lg mx-auto bg-blue-200 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='cursive text-3xl lg:text-6xl mb-4'>
                {singleProject.title}
              </h1>
              <div className='flex justify-center text-gray-800'>
                <img
                  src={urlFor(singleProject.authorImage).url()}
                  alt={singleProject.name}
                  className='w-10 h-10'
                />
              </div>
            </div>
          </div>
          <img
            src={singleProject.mainImage.asset.url}
            alt={singleProject.title}
            className='w-full object-cover rounded-t'
            style={{ height: '400px' }}
          />
        </header>
        <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
          <BlockContent
            blocks={singleProject.body}
            projectId='t2onm8nt'
            dataset='production'
          />
        </div>
        {/* This doesn't work yet */}
        <div className='flex'>
          <img src={singleProject.images} alt='' />
        </div>
      </article>
    </main>
  );
}
