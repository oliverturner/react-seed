// @flow

import React from 'react'
import InlineSVG from 'svg-inline-react'

import logo from '../../assets/icons/leaf.svg'
import s from './styles.pcss'

type Props = {
  children: React$Element<*>
}

const Masthead = ({children}: Props): React$Element<*> => {
  return (
    <header className={s.masthead}>
      <h1 className={s.masthead__title}>{children}</h1>
      <a className={s.masthead__logo}>
        <InlineSVG src={logo} />
        logo
      </a>
    </header>
  )
}

export default Masthead
