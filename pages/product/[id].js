import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch data for the product with the specified id and render the page

  return (
    <div>
      <h1>Product Details for ID {id}</h1>
      {/* Render product details using the retrieved id */}
    </div>
  );
}
