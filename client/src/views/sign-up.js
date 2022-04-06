import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './sign-up.module.css'

const SignUp = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Sign Up - KO Revive</title>
        <meta property="og:title" content="Sign Up - KO Revive" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>Sign Up</h1>
            <div className={styles['container03']}>
              <div className={styles['container04']}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={` ${styles['Input']} ${projectStyles['input']} `}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={` ${styles['Input01']} ${projectStyles['input']} `}
                />
              </div>
            </div>
            <div className={styles['container05']}>
              <div className={styles['container06']}>
                <input
                  type="text"
                  placeholder="Email"
                  className={` ${styles['Input02']} ${projectStyles['input']} `}
                />
                <input
                  type="text"
                  placeholder="Re-Email"
                  className={` ${styles['Input03']} ${projectStyles['input']} `}
                />
              </div>
            </div>
            <div className={styles['container07']}>
              <div className={styles['container08']}>
                <input
                  type="text"
                  placeholder="Password"
                  className={` ${styles['Input04']} ${projectStyles['input']} `}
                />
                <input
                  type="text"
                  placeholder="Re-Password"
                  className={` ${styles['Input05']} ${projectStyles['input']} `}
                />
              </div>
            </div>
            <button
              className={` ${styles['LoginButton']} ${projectStyles['button']} `}
            >
              Login
            </button>
            <Link to="/login" className={styles['navlink']}>
              <span className={styles['text1']}>Sign In</span>
            </Link>
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
        <div className={styles['Container-Mobile']}>
          <div className={styles['container09']}>
            <h1 className={styles['text2']}>Sign Up</h1>
            <div className={styles['container10']}></div>
            <input
              type="text"
              placeholder="First Name"
              className={` ${styles['Input06']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={` ${styles['Input07']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Email"
              className={` ${styles['Input08']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Re-Email"
              className={` ${styles['Input09']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Password"
              className={` ${styles['Input10']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Re-Password"
              className={` ${styles['Input11']} ${projectStyles['input']} `}
            />
            <button
              className={` ${styles['LoginButton1']} ${projectStyles['button']} `}
            >
              Login
            </button>
            <span className={styles['text3']}>
              <span>Sign Up</span>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['Image2']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image3']}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SignUp
