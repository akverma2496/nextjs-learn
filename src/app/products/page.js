import React from 'react'
import Link from 'next/link'

const page = async () => {

  const response  = await fetch("http://localhost:3000/api/products")
  const {products} = await response.json()

  return (
    <div>
        <main>
      <h1>Products Page</h1>
      <br/>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <Link href={`/products/${product.id}`}>Go to Product {product.id}</Link>
          </li>
          
        ))}
      </ul>
    </main>
    </div>
  )
}

export default page