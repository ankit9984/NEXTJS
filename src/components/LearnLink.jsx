import Link from 'next/link'
import React from 'react'

function LearnLink() {
    const userId = 'Ankit';
  return (
    <>
        <Link href='/admin/dashboard'>Go to Admin DashBoard</Link>
        <Link href={`user/profile/${userId}`}>Go to user Profile</Link>
    </>
  )
}

export default LearnLink