import React from 'react'
import Application from '../index.jsx'
import styles from '../styles.pcss'
import { shallow } from 'enzyme'

describe('Application', function () {
  it('displays the component', function () {
    const application = shallow(<Application />)

    expect(application.find(`.${styles.main}`)).to.have.length(1)
  })
})
