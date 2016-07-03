import React from 'react'

import Header from 'components/header'

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './styles.pcss'

const counter = 2

const Application = () => (
  <div className={styles.main}>
    <div className={styles.wrap}>
      <Header display={counter % 2 === 0}>
        <p>w00t!</p>
      </Header>

      <main className={styles.body}>
        <p>React Seed: a solid start!</p>
        <input type="text" placeholder="hurrah" />
      </main>
    </div>
  </div>
)

export default Application
