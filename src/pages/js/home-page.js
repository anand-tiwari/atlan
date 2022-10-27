import Candidate from '@/components/Candidate'
import Header from '@/components/Header'
import Query from '@/components/Query'

import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'HomePage',
  components: {
    Candidate,
    Header,
    Query
  },
  setup (props) {
    const deselectedHighlight = () => false

    onMounted(() => {
      window.addEventListener('click', deselectedHighlight)
    })

    onUnmounted(() => {
      window.removeEventListener('mousedown', deselectedHighlight)
    })
  }
}
