import React from 'react'

import {repository} from '../../../package.json'
import Masthead from 'components/masthead'
import s from './styles.pcss'

const Application = () => (
  <main className={s.app}>
    <div className={s.wrap}>
      <Masthead>seed</Masthead>
      <a className={s.link} href={repository}>source</a>
    </div>
  </main>
)

export default Application
