import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const courses = await payload.find({ collection: 'courses' })

  return courses.docs.map((course) => ({
    slug: course.slug,
  }))
}

interface Course {
  id: string | number
  title: string
}

interface Lesson {
  id: string | number
  title: string
  number: number
  slug: string
}

export default async function CoursePage({ params }: { params: { courseSlug: string } }) {
  const { courseSlug } = params
  const payload = await getPayload({ config })
  const courseData = await payload.find({
    collection: 'courses',
    where: { slug: { equals: courseSlug } },
  })
  const course = courseData.docs[0] as unknown as Course
  const lessonData = await payload.find({
    collection: 'lessons',
    where: { course: { equals: course.id } },
    sort: 'number',
  })
  const lessons = lessonData.docs as unknown as Lesson[]
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold">{course.title}</h2>
      {lessons.map((lesson) => (
        <Link href={`/course/${courseSlug}/${lesson.slug}`} key={lesson.id}>
          <div className="mt-4 p-4 border rounded hover:bg-gray-100" key={lesson.id}>
            <div className="text-lg font-semibold">{lesson.title}</div>
            <div className="text-sm">Lesson {lesson.number}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
