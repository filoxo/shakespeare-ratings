import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Review from './Review'

describe('<Review/>', () => {
  let props
  beforeEach(() => {
    props = {
      rating: 0.8,
      publish_date: '2016-09-05T23:25:47.642350Z',
      id: '9783221620868',
      author: 'Kaley Schiller',
      loadReviewBody: jest.fn(),
    }
  })
  it('should render', () => {
    const wrapper = shallow(<Review {...props} />)
    expect(wrapper).toBeTruthy()
    const tree = renderer.create(<Review {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should load body on click', () => {
    const wrapper = shallow(<Review {...props} />)
    wrapper.find('.reviewMoreBtn').simulate('click')
    expect(props.loadReviewBody).toHaveBeenCalled()
  })
  it('should display body if exists', () => {
    const body = 'Lorem ipsum dolor amet'
    const wrapper = shallow(<Review {...props} body={body} />)

    expect(wrapper.find('.reviewBody').text()).toEqual(body)
  })
})
