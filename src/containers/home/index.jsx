import React from 'react'
import InlineSVG from 'svg-inline-react'

import Masthead from 'components/masthead'
import icon from 'assets/icons/github.svg'
import s from './styles.pcss'
import {homepage} from '../../../package.json'

const Application = () => (
  <main className={s.app}>
    <div className={s.wrap}>
      <Masthead>seed</Masthead>
      <a className={s.link} href={homepage}>
        <InlineSVG src={icon} />
        Fork me on Github
      </a>
    </div>
  </main>
)

export default Application
