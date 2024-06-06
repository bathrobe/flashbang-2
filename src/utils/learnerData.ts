import config from '@payload-config'
import { getPayload } from 'payload'

export const getOrCreateLearner = async (userId: string | null) => {
  const payload = await getPayload({ config })
  const learnerData = await payload.find({
    collection: 'learners',
    where: {
      clerkId: { equals: userId },
    },
  })

  if (learnerData.docs.length === 0) {
    // Create a new learner document if not found
    return await payload.create({
      collection: 'learners',
      data: {
        clerkId: userId,
      },
    })
  } else {
    // Return the existing learner document
    return learnerData.docs[0]
  }
}
