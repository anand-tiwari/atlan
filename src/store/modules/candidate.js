import { fetchCandidates } from '@/api'
import { getUpdatedCandidates } from '@/utils/sort-filter'

const state = () => ({
  isLoading: false,
  candidateHeaderFilter: [{
    field: 'name',
    label: 'Name',
    isFilter: false,
    type: 'string'
  },
  {
    field: 'email',
    label: 'Email',
    isFilter: false,
    type: 'email'
  },
  {
    field: 'birth_date',
    label: 'Age',
    isFilter: false,
    type: 'date'
  },
  {
    field: 'year_of_experience',
    label: 'Experience',
    isFilter: true,
    type: 'number'
  },
  {
    field: 'position_applied',
    label: 'Position',
    isFilter: true,
    type: 'string'
  },
  {
    field: 'application_date',
    label: 'Applied On',
    isFilter: true,
    type: 'date'
  },
  {
    field: 'status',
    label: 'status',
    isFilter: false,
    type: 'string'
  }
  ],
  pagination: {
    page: 1,
    total: 10,
    pageSize: 10
  },
  candidateList: [],
  candidates: [],
  query: ''
})

export const mutations = {
  setLoading (state, val) {
    state.isLoading = val
  },
  setCandidateList (state, val) {
    state.candidateList = val
  },
  setCandidates (state, val) {
    state.candidates = val
  },
  setPagination (state, val) {
    state.pagination = { ...state.pagination, ...val }
  },
  setQuery (state, val) {
    state.query = val
  },
  setNoResult (state, val) {
    state.noResult = val
  }
}

const actions = {
  loadCandidate: async ({ commit, state }, { data, success, fail }) => {
    commit('setLoading', true)
    commit('setNoResult', false)

    const apiResponse = await fetchCandidates({ query_id: data.query_id })

    commit('setLoading', false)
    commit('setQuery', data.query_id)

    if (apiResponse.data.length === 0) {
      commit('setNoResult', true)
      commit('setCandidateList', [])
      commit('setCandidates', [])
      fail && fail()
    } else {
      const response = apiResponse.data.length > 0 && apiResponse.data[0]
      commit('setCandidateList', response.data)
      commit(
        'setCandidates',
        response.data.slice(0, state.pagination.pageSize)
      )
      commit('setPagination', {
        total: Math.ceil(response.data.length / state.pagination.pageSize)
      })
      success && success(response.data)
    }
  },
  sortByField: ({ commit, state }, sortParams) => {
    const sortedResult = getUpdatedCandidates(
      state.candidateList,
      sortParams,
      state.candidateHeaderFilter
    )
    commit('setCandidateList', sortedResult)
    const currentIndex =
            (state.pagination.page - 1) * state.pagination.pageSize
    commit(
      'setCandidates',
      sortedResult.slice(currentIndex, currentIndex + state.pagination.pageSize)
    )
  },
  nextPageResult: ({ commit, state }, pageValue) => {
    commit('setPagination', {
      page: state.pagination.page + pageValue
    })
    const currentIndex =
            (state.pagination.page - 1) * state.pagination.pageSize
    commit(
      'setCandidates',
      state.candidateList.slice(
        currentIndex,
        currentIndex + state.pagination.pageSize
      )
    )
  }
}

const getters = {
  candidates: (state) => state.candidates,
  candidateHeaderFilter: (state) => state.candidateHeaderFilter,
  pagination: (state) => state.pagination,
  isLoading: (state) => state.isLoading
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
