export default {
  name: 'Article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title_text',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slot',
      type: 'number',
      title: 'Slot',
    },
    {
      name: 'header_image',
      type: 'image',
      title: 'Header Image',
    },
    {
      name: 'featured_image',
      type: 'image',
      title: 'Featured Image',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
    },
  ],
}
