import { ClerkProvider } from '@clerk/nextjs'
import '@/globals.css'
import { auth } from '@clerk/nextjs/server'
import { getOrCreateLearner } from '@/utils/learnerData'
import LearnerContextProvider from '@/contexts/LearnerContext'
import Header from '@/components/layout/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth()
  const learner = getOrCreateLearner(userId)
  return (
    <>
      <html>
        <body>
          <ClerkProvider>
            <LearnerContextProvider initialLearnerData={learner}>
              <Header />
              <main className=" max-w-[1000px] mx-auto">{children}</main>
            </LearnerContextProvider>
          </ClerkProvider>
        </body>
      </html>
    </>
  )
}

export default Layout
