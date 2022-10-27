/*
 Covert key-value object in query params string
 Eg. paramObj = {name: ['test1', 'test2'], api-key: '123'}
 output =>  ?name=test&name=test2&api-key=123
 */
export const serializeQueryParams = function (paramObj) {
  if (paramObj) {
    return (
      '?' +
            Object.keys(paramObj)
              .map(k => {
                if (typeof paramObj[k] === 'object') {
                  return paramObj[k]
                    .map(v => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
                    .join('&')
                } else {
                  return `${encodeURIComponent(k)}=${encodeURIComponent(
              paramObj[k]
            )}`
                }
              })
              .join('&')
    )
  }
  return ''
}

export const getAge = (dateOfBirth) => {
  var today = new Date()
  var birthDate = new Date(dateOfBirth)
  var ageNow = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    ageNow--
  }
  return ageNow
}
