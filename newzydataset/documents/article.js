export default {
  name: 'event',
  type: 'document',
  title: 'Articles',
  fields: [
    {
      name: 'user',
      title: 'Google User Id',
      type: 'string',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'object',
      fields: [
        {
          name: 'id',
          title: 'NewsAPI Id',
          type: 'string',
        },
        {
          name: 'name',
          title: 'Publication Name',
          type: 'string',
        },
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'linkToStory',
      title: 'Story Url',
      type: 'url',
    },
    {
      name: 'urlToImage',
      title: 'Image Url',
      type: 'url',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
    },
    {
      name: 'content',
      title: 'Full Story',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
