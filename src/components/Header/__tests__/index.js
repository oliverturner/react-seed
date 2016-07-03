import React from 'react'
import Header from '../index.jsx'
import styles from '../styles.pcss'
import { shallow } from 'enzyme'

describe('Header', function () {
  it('displays the title', function () {
    const header = shallow(<Header />)

    const title = header.find(`.${styles.title}`)

    expect(title.text()).to.equal('YARSK')
  })
})
