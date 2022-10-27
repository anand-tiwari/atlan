import axios from 'axios'
import config from '@/config'
import { serializeQueryParams } from '@/utils'

const getUrl = (queryParams) => {
  console.log(config.api.candidate + serializeQueryParams(queryParams))
  return config.api.candidate + serializeQueryParams(queryParams)
}

export const fetchCandidates = (queryParams = null) => {
  return axios.get(getUrl(queryParams))
}
