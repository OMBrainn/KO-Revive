import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ItemsCard from '../components/items-card'
import Footer from '../components/footer'
import styles from './shop.module.css'

const Shop = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Shop - KO Revive</title>
        <meta property="og:title" content="Shop - KO Revive" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>Shop</h1>
            <span className={styles['text1']}>
              <span>Find something you like!</span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['Image']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image1']}
          />
        </div>
      </div>
      <div className={styles['Features']}>
        <div className={styles['container3']}>
          <ItemsCard
            price="Price: $200"
            title="Bee 9s"
            image_src="/playground_assets/bee%209s-200h.png"
            rootClassName="rootClassName"
          ></ItemsCard>
          <ItemsCard
            image_src="/playground_assets/aqua%20crystal%20lite%20forces-200h.png"
            rootClassName="rootClassName1"
          ></ItemsCard>
          <ItemsCard
            image_src="/playground_assets/crimson%20crystal%20lite%20forces-200h.png"
            rootClassName="rootClassName2"
          ></ItemsCard>
          <ItemsCard
            image_src="/playground_assets/lite%20forces-200h.png"
            rootClassName="rootClassName3"
          ></ItemsCard>
          <ItemsCard rootClassName="rootClassName7"></ItemsCard>
          <ItemsCard rootClassName="rootClassName6"></ItemsCard>
          <ItemsCard rootClassName="rootClassName5"></ItemsCard>
          <ItemsCard rootClassName="rootClassName4"></ItemsCard>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Shop
