import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'g68biovi',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false
});

export default client;