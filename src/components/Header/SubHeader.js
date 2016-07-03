import React, {PropTypes} from 'react'

import styles from './styles.pcss'

const SubHeader = ({children = []}) => {
  return (<h2 className={styles.tagline}>
    {children.split(' ').map((word, i) => {
      const arr = word.split('')
      return (<span key={i}><strong>{arr.shift()}</strong>{arr.join('')} </span>)
    })}
  </h2>)
}

SubHeader.propTypes = {
  children: PropTypes.node
}

export default SubHeader
