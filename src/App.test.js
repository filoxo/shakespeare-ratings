import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { getReviews, getReviewById } from './resource'

const getReviewsData = {
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
}

const getReviewByIdData = {
  data: {
    rating: 3.2,
    publish_date: '2016-09-04T23:25:47.642388Z',
    id: '9793364045824',
    body: 'Can one desire too much of a good thing?.',
    author: 'Fay Lemke',
  },
}

jest.mock('./resource', () => ({
  getReviews: jest.fn(),
  getReviewById: jest.fn(),
}))

describe('<App/>', () => {
  beforeAll(() => {
    getReviews.mockImplementation(() => Promise.resolve(getReviewsData))
    getReviewById.mockImplementation(() => Promise.resolve(getReviewByIdData))
  })
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
    beforeEach(() => {
      wrapper = shallow(<App />)
    })
    it('displays a Review for each item in data response', () => {
      expect(wrapper.find('Review').length).toEqual(getReviewsData.data.length)
    })
    it('calls loads single review body', async () => {
      const reviewIndex = 1
      wrapper.instance().loadSingleReview(reviewIndex)
      await Promise.resolve()
      expect(wrapper.state('reviews')[reviewIndex].body).toEqual(
        getReviewByIdData.data.body
      )
    })
  })
})
