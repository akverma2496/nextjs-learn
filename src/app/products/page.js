import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <main>
      <h1>Products Page</h1>
      <p>This is a placeholder for the products listing.</p>
      <ul>
        {[1,2,3,4,5,6,7,8,9,10].map((id) => (
          <li key={id}>
            <Link href={`/products/${id}`}>Go to Product {id}</Link>
          </li>
        ))}
      </ul>
    </main>
    </div>
  )
}

export default page