import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 't2onm8nt',
  dataset: 'production',
  useCdn: true,
});
