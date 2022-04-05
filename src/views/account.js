import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './account.module.css'

const Account = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Account - KO Revive</title>
        <meta property="og:title" content="Account - KO Revive" />
      </Helmet>
      <div className={styles['Hero']}>
        <div className={styles['Bg']}></div>
        <Header></Header>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h1 className={styles['text']}>Account</h1>
            <span className={styles['text01']}>
              Name:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
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
      <div className={styles['Settings']}>
        <h1 className={styles['text02']}>Settings</h1>
        <div className={styles['SettingInputs']}>
          <div className={styles['container03']}>
            <div className={styles['container04']}>
              <input
                type="text"
                disabled="true"
                placeholder="First Name"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <input
                type="text"
                disabled="true"
                placeholder="Last Name"
                className={` ${styles['textinput01']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container05']}>
            <div className={styles['container06']}>
              <input
                type="text"
                placeholder="Email"
                className={` ${styles['textinput02']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container07']}>
            <div className={styles['container08']}>
              <input
                type="text"
                placeholder="New Password"
                className={` ${styles['textinput03']} ${projectStyles['input']} `}
              />
              <input
                type="text"
                placeholder="Re - New Password"
                className={` ${styles['textinput04']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container09']}>
            <div className={styles['container10']}>
              <input
                type="text"
                placeholder="Current Password"
                className={` ${styles['textinput05']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container11']}>
            <div className={styles['container12']}>
              <button
                className={` ${styles['button']} ${projectStyles['button']} `}
              >
                <span className={styles['text03']}>
                  <span>Save Changes</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles['SettingInputs-Mobile']}>
          <div className={styles['container13']}>
            <div className={styles['container14']}>
              <input
                type="text"
                disabled="true"
                placeholder="First Name"
                className={` ${styles['textinput06']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container15']}>
            <div className={styles['container16']}>
              <input
                type="text"
                disabled="true"
                placeholder="Last Name"
                className={` ${styles['textinput07']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container17']}>
            <div className={styles['container18']}>
              <input
                type="text"
                placeholder="Email"
                className={` ${styles['textinput08']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container19']}>
            <div className={styles['container20']}>
              <input
                type="text"
                placeholder="New Password"
                className={` ${styles['textinput09']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container21']}>
            <div className={styles['container22']}>
              <input
                type="text"
                placeholder="Re - New Password"
                className={` ${styles['textinput10']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container23']}>
            <div className={styles['container24']}>
              <input
                type="text"
                placeholder="Current Password"
                className={` ${styles['textinput11']} ${projectStyles['input']} `}
              />
            </div>
          </div>
          <div className={styles['container25']}>
            <div className={styles['container26']}>
              <button
                className={` ${styles['button1']} ${projectStyles['button']} `}
              >
                <span className={styles['text05']}>
                  <span>Save Changes</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Orders']}>
        <h1 className={styles['text07']}>
          <span>Orders</span>
        </h1>
        <div className={styles['Card']}>
          <div className={styles['container27']}>
            <span className={styles['text09']}>03/22/22</span>
            <img
              alt="image"
              src="/playground_assets/bee%209s-200h.png"
              className={styles['image2']}
            />
            <span className={styles['text10']}>$200</span>
          </div>
          <span className={styles['text11']}>
            <span className={styles['text12']}>
              <span>Name: xxxxxxxxxxxx- xxxxxxxxxxxx</span>
            </span>
            <br></br>
            <span>
              {' '}
              Address:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Design Name:</span>
            <br></br>
            <span>Transaction Code: OMB_WHS332_37UDDN_283833</span>
            <span></span>
          </span>
          <button
            className={` ${styles['button2']} ${projectStyles['button']} `}
          >
            Status: Sent
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Account
