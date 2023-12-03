import React from 'react';
import styles from './product.module.css'
import Link from 'next/link';
import { useState } from 'react';
import AddProductModal from './AddProductModal';

export default function Product() {
  // AddProductModal button state
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const toggleAddProductModal = () => {
    setShowAddProductModal(!showAddProductModal);
    console.log('change AddProductModal state:', showAddProductModal)
  };

  const product = {
    id: 1,
    name: 'Product Name',
    image: '/path/to/product/image.png'
  };
  const { id, name, image } = product;
  return (
    <>

      <AddProductModal></AddProductModal>
      {/* 新增作品 */}
      <div className={styles.product}>
        <div className='rounded-md bg-slate-400 p-4 h-40 text-center flex flex-col items-center hover:bg-sky-700 cursor-pointer' onClick={toggleAddProductModal}>

          <h2 className={styles.product_h2}>Add New Project</h2>
          <h2 className='mt-0'>+</h2>

        </div>


        {/* 如果showAddProductModal is true show project form */}
        {showAddProductModal &&
          <div>

            <AddProductModal />
          </div>
        }
      </div>




      <div className={styles.product}>
        <Link href="/product/[projectName]" as={`/product/${id}`}>
          <div className="rounded-md bg-slate-400 p-4 h-40 text-center flex flex-col items-center">
            <img src={image} alt="Product Image" />
            <h2 className={styles.product_h2}>{name}</h2>
          </div>
        </Link>
      </div>
    </>



  );
}
