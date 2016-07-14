import React, {PropTypes} from 'react'
import InlineSVG from 'svg-inline-react'

import logo from 'assets/icons/leaf.svg'
import s from './styles.pcss'

const Masthead = ({children}) => (
  <header className={s.masthead}>
    <h1 className={s.masthead__title}>{children}</h1>
    <a className={s.masthead__logo}>
      <InlineSVG src={logo} />
      logo
    </a>
  </header>
)

Masthead.propTypes = {
  children: PropTypes.node.isRequired
}

export default Masthead
