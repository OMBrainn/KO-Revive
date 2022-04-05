import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div
      data-role="Header"
      className={` ${styles['Header']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <Link to="/" className={styles['navlink']}>
          <img
            alt={props.image_alt}
            src="/playground_assets/logo-200h.png"
            className={styles['image']}
          />
        </Link>
        <Link to="/" className={styles['navlink1']}>
          <h1 className={` ${styles['Heading']} ${projectStyles['textSM']} `}>
            {props.heading1}
          </h1>
        </Link>
        <div className={styles['container1']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          </svg>
          <Link
            to="/"
            className={` ${styles['navlink2']} ${projectStyles['textSM']} `}
          >
            HOME
          </Link>
        </div>
        <div className={styles['container2']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
            <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
            <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          </svg>
          <Link
            to="/shop"
            className={` ${styles['navlink3']} ${projectStyles['textSM']} `}
          >
            SHOP
          </Link>
        </div>
      </div>
      <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon07']}>
          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
        </svg>
      </div>
      <div className={styles['Container3']}>
        <div className={styles['container4']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon09']}>
            <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          </svg>
          <Link
            to="/login"
            className={` ${styles['navlink4']} ${projectStyles['textSM']} `}
          >
            ACCOUNT
          </Link>
        </div>
      </div>
      <div data-type="MobileMenu" className={styles['MobileMenu']}>
        <div className={styles['Top']}>
          <Link to="/" className={styles['navlink5']}>
            <h1
              className={` ${styles['Heading1']} ${projectStyles['textSM']} `}
            >
              {props.heading11}
            </h1>
          </Link>
          <div data-type="CloseMobileMenu" className={styles['CloseMenu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon11']}>
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className={styles['Mid']}>
          <div className={styles['container5']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
            <Link
              to="/"
              className={` ${styles['navlink6']} ${projectStyles['textSM']} `}
            >
              HOME
            </Link>
          </div>
          <div className={styles['container6']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
              <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
              <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
              <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            </svg>
            <Link
              to="/shop"
              className={` ${styles['navlink7']} ${projectStyles['textSM']} `}
            >
              SHOP
            </Link>
          </div>
        </div>
        <div className={styles['Bot']}>
          <div className={styles['container7']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon20']}>
              <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
            </svg>
            <Link
              to="/login"
              className={` ${styles['navlink8']} ${projectStyles['textSM']} `}
            >
              ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading11: 'KO REVIVE',
  image_alt: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: 'KO REVIVE',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  heading11: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Header
