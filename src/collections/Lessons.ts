import { CollectionConfig } from 'payload/types'

export const Lessons: CollectionConfig = {
  slug: 'lessons',
  access: {
    read: () => true, // Allows public read access
  },
  labels: { plural: 'Lessons', singular: 'Lesson' },
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
      name: 'number',
      type: 'number',
    },
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
    },
  ],
}
