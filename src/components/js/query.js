import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Query',

  setup (props) {
    const store = useStore()
    const router = useRouter()

    const message = ref('query1 \n\n query2 \n\n query3')
    const rows = ref(5)
    const maxRows = ref(15)
    const minRows = ref(4)
    const changeRows = function (event) {
      const textareaLineHeight = 24
      const previousRows = event.target.rows
      event.target.rows = minRows.value // reset number of rows in textarea
      const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

      if (currentRows === previousRows) {
        event.target.rows = currentRows
      }

      if (currentRows >= maxRows.value) {
        event.target.rows = maxRows.value
        event.target.scrollTop = event.target.scrollHeight
      }
      rows.value = currentRows < maxRows.value ? currentRows : maxRows.value
    }
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

    return { message, rows, minRows, maxRows, changeRows, submit }
  }
}
