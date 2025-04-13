const idea = {
    name: 'idea',
    title: 'Idea',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'pitch',
        title: 'Pitch',
        type: 'text',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'number',
        title: 'Number',
        type: 'string',
      },
    ],
  }
  
  export default idea
  