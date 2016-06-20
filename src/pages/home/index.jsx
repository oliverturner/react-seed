import React from 'react';

import Header from 'components/header';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './styles.pcss';

const Application = () => (
  <div className={styles.main}>
    <div className={styles.wrap}>
      <Header />

      <main className={styles.body}>
        <p>React Seed: a solid start!</p>
        <input type="text" placeholder=""/>
      </main>
    </div>
  </div>
);

export default Application;
