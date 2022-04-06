import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './item-details.module.css'

const ItemDetails = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>ItemDetails - KO Revive</title>
        <meta property="og:title" content="ItemDetails - KO Revive" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container1']}>
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image']}
          />
        </div>
      </div>
      <div className={styles['Pricing']}>
        <div className={styles['container2']}>
          <div className={styles['container3']}>
            <div className={styles['container4']}>
              <h1 className={styles['text']}>
                <span>Item</span>
              </h1>
            </div>
            <img
              alt="image"
              src="/playground_assets/aqua%20crystal%20lite%20forces-500h.png"
              className={styles['image1']}
            />
          </div>
          <div className={styles['container5']}>
            <div className={styles['container6']}>
              <div className={styles['container7']}>
                <span className={styles['text02']}>Price</span>
                <span className={styles['text03']}>$100</span>
                <span className={styles['text04']}>
                  <span className={styles['text05']}>
                    Color:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>##</span>
                </span>
                <span className={styles['text07']}>
                  <span className={styles['text08']}>
                    Turnover Time:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>3 Weeks</span>
                </span>
                <span className={styles['text10']}>
                  <span className={styles['text11']}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ItemDetails
