import React from 'react'
import { SignedIn, SignInButton, SignedOut, SignOutButton } from '@clerk/nextjs'

const page = () => {
  return (
    <>
      <div>HomePage</div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <p>You are signed out. Please sign in to continue.</p>
        <SignInButton />
      </SignedOut>
    </>
     
  )
}

export default page