
export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <main style={{ border: '2px solid #ccc', padding: '1rem', marginTop: '2rem' }}>
      <h1>Product {id} details page — content coming soon!</h1>
    </main>
  );
}