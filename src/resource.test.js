import { getReviews, getReviewById } from './resource'

describe('Resources', () => {
  describe('successful responses', () => {
    const successData = { data: 'success' }
    beforeAll(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => successData,
        })
      )
    })
    it('getReviews should return data', () => {
      getReviews().then(res => {
        expect(res).toEqual(successData)
      })
    })
    it('getReviewById should return data', () => {
      getReviewById().then(res => {
        expect(res).toEqual(successData)
      })
    })
    afterAll(() => {
      global.fetch.mockClear()
    })
  })
  describe('error responses', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
        })
      )
    })
    it('getReviews should handle error', async () => {
      try {
        await getReviews()
      } catch (e) {
        expect(e instanceof Error).toEqual(true)
      }
    })
    afterAll(() => {
      global.fetch.mockClear()
    })
  })
})
