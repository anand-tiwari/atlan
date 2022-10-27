import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

import { getAge } from '@/utils'
import {
  ASCENDING,
  DESCENDING,
  FIELD,
  ORDER
} from '@/config'

import Pagination from '@/components/Pagination'
import Spinner from '@/components/Spinner'

export default {
  name: 'Candidate',
  setup (props) {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    // store state data
    const isLoading = computed(() => store.state.candidate.isLoading)
    const candidateHeaderFilter = computed(() => store.state.candidate.candidateHeaderFilter)
    const pagination = computed(() => store.state.candidate.pagination)
    const candidates = computed(() => store.state.candidate.candidates)
    const queryString = computed(() => store.state.candidate.query)
    const noResult = computed(() => store.state.candidate.noResult)

    // computed property
    const queryParams = computed(() => route.query)

    const isQueryResult = computed(() =>
      !isLoading.value && store.state.candidate.candidates.length > 0
    )

    const isQueryAvailable = computed(() => !!store.state.candidate.query)

    // methods
    const getAgeValue = (dob) => getAge(dob)

    const getHeaderStyle = (tableField) => {
      return tableField.field === queryParams.value[FIELD] &&
                (queryParams.value[ORDER] === ASCENDING ? 'top' : 'buttom')
    }

    const sortCandidateByField = ({ field, type }) => {
      const params = { ...queryParams.value }
      let order = ASCENDING
      if (field === queryParams.value[FIELD]) {
        order = queryParams.value[ORDER] === ASCENDING ? DESCENDING : ASCENDING
      }
      params[FIELD] = field
      params[ORDER] = order
      router.push({
        name: 'HomePage',
        query: params
      })
      store.dispatch('candidate/sortByField', { field, order, type })
    }

    return {
      isLoading,
      candidateHeaderFilter,
      pagination,
      candidates,
      queryString,
      queryParams,
      isQueryResult,
      isQueryAvailable,
      noResult,
      getAgeValue,
      getHeaderStyle,
      sortCandidateByField
    }
  },
  components: {
    Pagination,
    Spinner
  }
}
