import Candidate from '@/components/Candidate.vue'
import HomePage from '@/pages/HomePage'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: {
      template: 'Welcome to the app'
    }
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  }
  ]
})

const candidate = {
  namespaced: true,
  state: {
    candidates: [
      { id: 1, name: 'test1 candidate', year_of_experience: 10 },
      { id: 2, name: 'test2 candidate', year_of_experience: 5 }
    ],
    candidateHeaderFilter: [],
    pagination: {
      page: 1,
      total: 10,
      pageSize: 10
    },
    isLoading: false
  },
  mutations: {},
  actions: {
    loadCandidate: jest.fn(),
    sortByField: jest.fn()
  },
  getters: {
    candidates: state => state.candidates,
    candidateHeaderFilter: state => state.candidateHeaderFilter,
    pagination: state => state.pagination,
    isLoading: state => state.isLoading
  }
}

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    candidate
  }
})

describe('Candidate.vue', () => {
  let wrapper, vm

  beforeAll(async () => {
    router.push('/home')
    await router.isReady()
    wrapper = mount(Candidate, {
      global: {
        plugins: [store, router]
      },
      data () {
        return {}
      },
      shallow: true
    })
    vm = wrapper.vm
  })

  test('Initialized well', () => {
    expect(wrapper).toBeTruthy()
  })

  test('[METHOD] getAgeValue', () => {
    expect(vm.getAgeValue(new Date())).toEqual(0)
    expect(vm.getAgeValue(new Date())).toEqual(0)
  })

  test('[METHOD] sortCandidateByField', () => {
    vm.sortCandidateByField({ field: 'year_of_experience', type: 'number' })
  })

  test('[METHOD] getHeaderStyle top class', async () => {
    const param = {
      field: 'year_of_experience',
      order: 'ASC'
    }
    await router.push({
      name: 'HomePage',
      query: param
    })
    await nextTick()

    expect(vm.getHeaderStyle({ field: 'year_of_experience' })).toEqual('top')
  })

  test('[METHOD] getHeaderStyle buttom class', async () => {
    const param = {
      field: 'year_of_experience',
      order: 'DES'
    }
    await router.push({
      name: 'HomePage',
      query: param
    })
    await nextTick()

    expect(vm.getHeaderStyle({ field: 'year_of_experience' })).toEqual('buttom')
  })

  test('[COMPUTED] queryParams', async () => {
    const param = {
      field: 'year_of_experience',
      order: 'DES'
    }
    await router.push({
      name: 'HomePage',
      query: param
    })
    await nextTick()
    expect(vm.queryParams).toEqual(param)
  })
})
