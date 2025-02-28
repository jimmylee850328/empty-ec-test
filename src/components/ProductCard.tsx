import styles from './ProductCard.module.css'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <Image
        src="https://picsum.photos/300/200"
        alt="產品圖片"
        className={styles.productImage}
        width={300}
        height={200}
      />
      <h2 className={styles.productTitle}>精選商品</h2>
      <p className={styles.productPrice}>NT$ 1,280</p>
      <button className={styles.buyButton}>立即購買</button>
    </div>
  )
}

export default ProductCard 