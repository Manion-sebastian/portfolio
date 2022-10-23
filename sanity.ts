import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

// export const config = {
//         apiVersion: "2021-03-25",
//         dataset: "portdev", 
//         projectId: "rwlwb0hg",
//         useCdn: false
// }
export const config = {
        apiVersion: "2021-03-25",
        dataset: process.env.NEXT_PUBLIC_SDATASET || "portdev", 
        projectId: process.env.NEXT_PUBLIC_SPROID || "rwlwb0hg",
        useCdn: process.env.NODE_ENV === "production"
}


// console.log(config) // output works. 




export const sanityClient = createClient(config)

// console.log('sanityClient', sanityClient) 

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
