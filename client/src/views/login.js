import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Login - KO Revive</title>
        <meta property="og:title" content="Login - KO Revive" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <h1 className={styles['text']}>Sign In</h1>
            <input
              type="text"
              placeholder="Username/Email"
              className={` ${styles['Input']} ${projectStyles['input']} `}
            />
            <input
              type="text"
              placeholder="Password"
              className={` ${styles['Input1']} ${projectStyles['input']} `}
            />
            <button
              className={` ${styles['LoginButton']} ${projectStyles['button']} `}
            >
              Login
            </button>
            <Link to="/sign-up" className={styles['navlink']}>
              <span>Sign Up</span>
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
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
