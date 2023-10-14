import React from 'react';
import styles from './product.module.css'
import Link from 'next/link';

export default function Product() {
  return (
    <>

        <Link to={`/product/${id}`} className={`${styles.product} rounded-md bg-slate-400 p-4 text-center flex flex-col items-center`}>
          <img src="/images/Product/Weather.png" alt="Product Image" />
          <h2 className={styles.product_h2}>Product Name</h2>
        </Link>
      
    </>

  );
}
