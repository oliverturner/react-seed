import React from 'react'

import {homepage} from '../../../package.json'
import Masthead from 'components/masthead'
import s from './styles.pcss'

const Application = () => (
  <main className={s.app}>
    <div className={s.wrap}>
      <Masthead>seed</Masthead>
      <a className={s.link} href={homepage}>source</a>
    </div>
  </main>
)

export default Application
