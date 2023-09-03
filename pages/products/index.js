import Link from "next/link";

const products = [
  { id: 1, title: "Project-a" },
  { id: 2, title: "Project-b" },
  { id: 3, title: "Project-c" },
  { id: 4, title: "Project-d" },
];
const ProductsPage = () => {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        {products.map((product) => (
          <Link key={product.id} href={`/products/product-${product.id}`}>
            {product.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default ProductsPage;
