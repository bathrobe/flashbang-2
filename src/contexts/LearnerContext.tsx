'use client'

import { createContext, useContext, useState } from 'react'

type LearnerContextProviderProps = {
  children: React.ReactNode
  initialLearnerData: Record<string, any>
}

const LearnerContext = createContext<any>(null)

export default function LearnerContextProvider({
  children,
  initialLearnerData,
}: LearnerContextProviderProps) {
  const [learnerData, setLearnerData] = useState<Record<string, any>>(initialLearnerData)

  return (
    <LearnerContext.Provider
      value={{
        learnerData,
        setLearnerData,
      }}
    >
      {children}
    </LearnerContext.Provider>
  )
}

export function useLearnerContext() {
  const context = useContext(LearnerContext)
  if (!context) {
    throw new Error('useLearnerContext must be used within a LearnerContextProvider')
  }
  return context
}
