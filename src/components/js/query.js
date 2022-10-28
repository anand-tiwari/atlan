import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Query',

  setup (props) {
    const store = useStore()
    const router = useRouter()

    const message = ref('query1 \n\n query2 \n\n query3')
    const rows = ref(4)
    const maxRows = ref(20)
    const minRows = ref(4)

    const submit = () => {
      const selection = window.getSelection()
      const selectedText = selection.toString().trim()
      router.push({
        name: 'HomePage',
        query: {}
      })
      if (selectedText) {
        store.dispatch('candidate/loadCandidate', {
          data: { query_id: selectedText }
        })
      }
    }

    return { message, rows, minRows, maxRows, submit }
  }
}
