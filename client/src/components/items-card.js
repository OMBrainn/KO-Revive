import React from 'react'

import PropTypes from 'prop-types'

import styles from './items-card.module.css'

const ItemsCard = (props) => {
  return (
    <div
      className={` ${styles['FeatureCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <span className={styles['text']}>{props.price}</span>
      <h2 className={styles['text1']}>{props.title}</h2>
    </div>
  )
}

ItemsCard.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  title: 'Sneaker',
  rootClassName: '',
  price: 'Price: $100',
}

ItemsCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  price: PropTypes.string,
}

export default ItemsCard
