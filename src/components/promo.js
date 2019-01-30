import React from 'react'
import styles from './promo.module.css'
export default props => (
  <div className={styles.block}>
    <p>{props.Title}</p>
    <a href="#">Read more</a>
  </div>
)
