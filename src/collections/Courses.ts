import { CollectionConfig } from 'payload/types'
export const Courses: CollectionConfig = {
  slug: 'courses',
  access: {
    read: () => true, // Allows public read access
  },
  labels: { plural: 'Courses', singular: 'Course' },
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'sources',
      type: 'textarea',
    },
  ],
}
