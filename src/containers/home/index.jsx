import React from 'react'
import InlineSVG from 'svg-inline-react'

import s from './styles.pcss'
import logo from 'assets/icons/leaf.svg'

const Application = () => (
  <main className={s.app}>
    <div className={s.wrap}>
      <header className={s.masthead}>
        <h1 className={s.masthead__title}>seed</h1>
        <a className={s.masthead__logo}>
          <InlineSVG src={logo} />
          logo
        </a>
      </header>
      <a className={s.link} href="https://github.com/oliverturner/react-seed">source</a>
    </div>
  </main>
)

export default Application
