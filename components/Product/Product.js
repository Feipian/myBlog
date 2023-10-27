import React from 'react';
import styles from './product.module.css'
import Link from 'next/link';

export default function Product() {
  const product = {
    id: 1,
    name: 'Product Name',
    image: '/path/to/product/image.png'
  };
  const { id, name, image } = product;
  return (
    <div className={styles.product}>
      <Link href="/product/[projectName]" as={`/product/${id}`}>
        <div className="rounded-md bg-slate-400 p-4 text-center flex flex-col items-center">
          <img src={image} alt="Product Image" />
          <h2 className={styles.product_h2}>{name}</h2>
        </div>
      </Link>
    </div>

  );
}
