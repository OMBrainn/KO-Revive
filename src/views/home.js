import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>KO Revive</title>
        <meta property="og:title" content="KO Revive" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>K.O. Revive</h1>
            <span className={styles['text01']}>
              <span>Where footwear art is created to be worn and shown.</span>
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
      <div className={styles['Section1']}>
        <div className={styles['container03']}>
          <div className={styles['CardsContainer']}>
            <div className={styles['Card1']}>
              <div className={styles['container04']}></div>
              <h6
                className={` ${styles['text03']} ${projectStyles['textXL']} `}
              >
                Free Shipping
              </h6>
              <span className={styles['text04']}>
                Free Shipping throughout the entire process. Shipping to the
                Artist and Back to you. All Paid For.
              </span>
            </div>
            <div className={styles['Card2']}>
              <div className={styles['container05']}></div>
              <h6
                className={` ${styles['text05']} ${projectStyles['textXL']} `}
              >
                The Process
              </h6>
              <span className={styles['text06']}>
                <span>1. Deliver footwear</span>
                <br></br>
                <span>2. Wait for Designer (1-2 Weeks)</span>
                <br></br>
                <span>3. Your footwear is sent back</span>
              </span>
            </div>
            <div className={styles['Card3']}>
              <div className={styles['container06']}></div>
              <h6
                className={` ${styles['text12']} ${projectStyles['textXL']} `}
              >
                New Look
              </h6>
              <span className={styles['text13']}>
                Get your footwear customized if you want a new look. Or you can
                restore them to way they used to be.
              </span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image2']}
        />
      </div>
      <div className={styles['Section2']}>
        <div className={styles['container07']}>
          <h6 className={styles['text14']}>
            <span className={styles['text15']}>Featured Designs</span>
          </h6>
          <span className={` ${styles['text16']} ${projectStyles['textXL']} `}>
            <span className={styles['text17']}>
              Checkout our hottest designs
            </span>
          </span>
        </div>
        <div className={styles['container08']}>
          <img
            alt="image"
            src="/playground_assets/afro-1500h.jpg"
            className={styles['image3']}
          />
        </div>
      </div>
      <div className={styles['Section3']}>
        <div className={styles['container09']}>
          <div className={styles['Contact']}>
            <h2 className={styles['text18']}>Contact Us</h2>
            <div className={styles['Form']}>
              <h1 className={styles['text19']}>
                Want to work with us? Or have any questions?
              </h1>
              <span
                className={` ${styles['text20']} ${projectStyles['textXL']} `}
              >
                Complete this form and we will get back to you in 24 hours.
              </span>
              <span
                className={` ${styles['text21']} ${projectStyles['textXS']} `}
              >
                FULL NAME
              </span>
              <input
                type="text"
                placeholder="Full Name"
                className={` ${styles['textinput']} ${projectStyles['textSM']} ${projectStyles['input']} `}
              />
              <span
                className={` ${styles['text22']} ${projectStyles['textXS']} `}
              >
                EMAIL
              </span>
              <input
                type="text"
                placeholder="Email"
                className={` ${styles['textinput1']} ${projectStyles['textSM']} ${projectStyles['input']} `}
              />
              <span
                className={` ${styles['text23']} ${projectStyles['textXS']} `}
              >
                MESSAGE
              </span>
              <textarea
                cols="80"
                rows="4"
                disabled="true"
                placeholder="Type a message"
                className={` ${styles['textarea']} ${projectStyles['textSM']} ${projectStyles['textarea']} `}
              ></textarea>
              <div className={styles['container10']}>
                <SecondaryButton
                  button="Send message"
                  rootClassName="rootClassName"
                ></SecondaryButton>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className={styles['image4']}
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
