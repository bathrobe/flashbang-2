import type { CollectionConfig } from 'payload/types'

export const Learners: CollectionConfig = {
  slug: 'learners',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'clerkId',
      type: 'text',
    },
    {
      name: 'courses',
      type: 'json',
    },
    {
      name: 'lessons',
      type: 'json',
    },
    {
      name: 'atoms',
      type: 'json',
    },
    {
      name: 'flashcards',
      type: 'json',
    },
  ],
}
