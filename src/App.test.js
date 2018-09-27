import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { getReviews, getReviewById } from './resource'

jest.mock('./resource', () => ({
  getReviews: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          rating: 0.8,
          publish_date: '2016-09-05T23:25:47.642350Z',
          id: '9783221620868',
          author: 'Kaley Schiller',
        },
        {
          rating: 3.2,
          publish_date: '2016-09-04T23:25:47.642388Z',
          id: '9793364045824',
          author: 'Fay Lemke',
        },
      ],
    })
  ),
  getReviewById: jest.fn(() =>
    Promise.resolve({
      data: {
        rating: 3.2,
        publish_date: '2016-09-04T23:25:47.642388Z',
        id: '9793364045824',
        body: 'Can one desire too much of a good thing?.',
        author: 'Fay Lemke',
      },
    })
  ),
}))

describe('<App/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy()
  })
  describe('without data', () => {
    it('should display a Spinner if data has not loaded', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.exists('Spinner')).toBeTruthy()
    })
  })
  describe('with data', () => {
    let wrapper
    beforeEach(async () => {
      wrapper = shallow(<App />)
      await Promise.resolve()
    })
    it('displays a Review for each item in data response', () => {
      expect(wrapper.find('Review').length).toEqual(2)
    })
  })
})
