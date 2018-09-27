import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Spinner from './Spinner'

describe('<Spinner/>', () => {
  it('renders without errors', () => {
    const wrapper = shallow(<Spinner />)
    expect(wrapper).toBeTruthy()
    const tree = renderer.create(<Spinner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
