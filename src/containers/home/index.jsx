import React from 'react'

import Masthead from 'components/masthead'
import s from './styles.pcss'
import {homepage} from '../../../package.json'

const Application = () => (
  <main className={s.app}>
    <div className={s.wrap}>
      <Masthead>seed</Masthead>
      <a className={s.link} href={homepage}>source</a>
    </div>
  </main>
)

export default Application
