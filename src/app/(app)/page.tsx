import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

interface Course {
  id: string
  title: string
  subtitle: string
  sources: string
  slug: string
}

export default async function Home() {
  const payload = await getPayload({ config })
  const courses = await payload.find({ collection: 'courses' })
  const docs = courses.docs as unknown as Course[]
  return (
    <div>
      <div>Welcome to Flashbang! Try out the course below to get started.</div>
      {docs.map((course) => {
        return (
          <Link href={`/course/${course.slug}`} key={course.slug}>
            <div className="mt-16 flex flex-col border p-8 hover:bg-gray-100" key={course.id}>
              <div className="text-2xl mb-2 font-bold">{course.title}</div>
              <div className="text-lg mb-2 italic">{course.subtitle}</div>
              <div className="text-lg">{course.sources}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
