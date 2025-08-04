
export default async function ProductPage({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/products/${id}`)
  const product = await response.json()
  console.log(product)

  return (
    <main style={{ border: '2px solid #ccc', padding: '1rem', marginTop: '2rem' }}>
      <h4>Title : {product.title}</h4>
      <p>Description: {product.description}</p>
      <p>Category : {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Price : {product.price}</p>
      <p>Weight: {product.weight}</p>
    </main>
  );
}