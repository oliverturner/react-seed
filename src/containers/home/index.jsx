import React from 'react'

import Masthead from 'components/masthead'
import s from './styles.pcss'

const Application = () => (
  <main className={s.app}>
    <div className={s.wrap}>
      <Masthead>seed?</Masthead>
      <a className={s.link} href="https://github.com/oliverturner/react-seed">source</a>
    </div>
  </main>
)

export default Application
