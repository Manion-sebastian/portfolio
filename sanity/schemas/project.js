export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "refrence", to: { type: "skill" }}],

    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url'

    },
  ],
}
