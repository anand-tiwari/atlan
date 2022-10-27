import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Pagination',

  setup (props) {
    const store = useStore()

    const currentPage = computed(() => store.state.candidate.pagination.page)

    const pagination = computed(() => store.state.candidate.pagination)

    const handlePaginationClick = (val) => store.dispatch('candidate/nextPageResult', val)

    return { currentPage, pagination, handlePaginationClick }
  }

/*
  computed: {
    ...mapGetters('candidate', ['pagination']),
    currentPage () {
      return this.pagination.page
    }
  },
  methods: {
    ...mapActions('candidate', ['nextPageResult']),
    handlePaginationClick (val) {
      this.nextPageResult(val)
    }
  }
  */
}
