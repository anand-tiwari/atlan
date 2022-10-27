import { NUMBER, STRING, DATE, ASCENDING } from '@/config'

export const sortNumberTypeField = (candidates, payload) => {
  if (payload.order === 'ASC') {
    candidates.sort((a, b) => a[payload.field] - b[payload.field])
    return candidates
  }
  candidates.sort((a, b) => b[payload.field] - a[payload.field])
  return candidates
}

export const sortStringTypeField = (candidates, payload) => {
  if (payload.order === ASCENDING) {
    candidates.sort((a, b) => a[payload.field].localeCompare(b[payload.field]))
    return candidates
  }
  candidates.sort((a, b) => b[payload.field].localeCompare(a[payload.field]))
  return candidates
}

export const sortDateTypeField = (candidates, payload) => {
  if (payload.order === ASCENDING) {
    candidates.sort((a, b) => new Date(a[payload.field]) - new Date(b[payload.field]))
    return candidates
  }
  candidates.sort((a, b) => new Date(b[payload.field]) - new Date(a[payload.field]))
  return candidates
}

export const getSortType = (payload, candidateHeaderFilter) => {
  const { field, type } = payload
  if (type) return type
  const found = candidateHeaderFilter.find((filter) => filter.field === field)
  return found ? found.type : null
}

export const getUpdatedCandidates = (candidates, payload, candidateHeaderFilter) => {
  if (Object.keys(payload).length === 0) {
    return candidates
  }
  const sortingType = getSortType(payload, candidateHeaderFilter)
  if (sortingType === null) {
    return candidates
  }

  if (sortingType === NUMBER) {
    return sortNumberTypeField(candidates, payload)
  }

  if (sortingType === STRING) {
    return sortStringTypeField(candidates, payload)
  }

  if (sortingType === DATE) {
    return sortDateTypeField(candidates, payload)
  }
  return candidates
}
