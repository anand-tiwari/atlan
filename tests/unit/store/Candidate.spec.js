import candidateModule from '@/store/modules/candidate'

describe('MUTATIONS store/candidate.js', () => {
  const state = {
    candidates: [],
    isLoading: false
  }
  test('mutation setCandidates', () => {
    const data = [{ id: 1, name: 'test candidate' }]
    candidateModule.mutations.setCandidates(state, data)
    expect(state.candidates).toStrictEqual(data)
  })
  test('mutation setLoading', () => {
    expect(state.isLoading).toStrictEqual(false)
    candidateModule.mutations.setLoading(state, true)
    expect(state.isLoading).toStrictEqual(true)
  })
})

describe('ACTIONS store/candidate.js', () => {
  test('action loadCandidate', () => {
    const commit = jest.fn()
    const state = {}
    const data = {
      queryParams: { _start: 0, end: 10 },
      sortParams: { field: 'year_of_experience', order: 'DES', type: 'number' }
    }
    candidateModule.actions.loadCandidate({ commit, state }, { data })
  })
  test('action sortByField', () => {
    const commit = jest.fn()
    const state = {
      candidates: [
        { id: 1, name: 'test candidate', year_of_experience: 10 },
        { id: 2, name: 'test candidate', year_of_experience: 5 }
      ],
      candidateList: [
        { id: 1, name: 'test candidate', year_of_experience: 10 },
        { id: 2, name: 'test candidate', year_of_experience: 5 }
      ],
      pagination: {
        page: 1,
        total: 1,
        pageSize: 5
      }
    }
    const sortParams = { field: 'year_of_experience', order: 'ASC', type: 'number' }
    candidateModule.actions.sortByField({ commit, state }, sortParams)
  })
})

describe('GETTERS store/candidate.js', () => {
  const state = {
    candidates: [{}],
    candidateHeaderFilter: [],
    pagination: {},
    isLoading: false
  }
  expect(candidateModule.getters.candidates(state)).toStrictEqual(state.candidates)
  expect(candidateModule.getters.candidateHeaderFilter(state)).toStrictEqual(state.candidateHeaderFilter)
  expect(candidateModule.getters.pagination(state)).toStrictEqual(state.pagination)
  expect(candidateModule.getters.isLoading(state)).toStrictEqual(state.isLoading)
})
