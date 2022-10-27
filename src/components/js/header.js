import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup () {
    const router = useRouter()

    const reload = () => router.push('/')
    return { reload }
  }
}
