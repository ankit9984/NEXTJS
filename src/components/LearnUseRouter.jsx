'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function LearnUseRouter() {
    const router = useRouter();
    console.log(router);
    
  return (
    <>
        <h1>User Router</h1>
        <button type='button' onClick={() => router.push('/admin/dashboard')}>Got to AdminDashBoard</button>
    </>
  )
}

export default LearnUseRouter