import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const mockData = {
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

describe('<App/>', () => {
  beforeEach(() => {
    mock.mockClear()
  })
  it('renders without crashing', () => {
    fetch.mockReturnValueOnce(
      Promise.resolve({
        ok: true,
        json: () => mockdata,
      })
    )
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy()
  })
})
