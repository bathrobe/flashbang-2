import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 mx-auto border border-b-5 border-black mb-8">
      <Link href="/" className="font-bold text-2xl">
        Flashbang
      </Link>
      <nav className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  )
}

export default Header
