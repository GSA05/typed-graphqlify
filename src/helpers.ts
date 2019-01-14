export const filterParams = (k: string) => k !== '__params'

const nestParams = (params: any): any =>
  typeof params === 'object' ? `{ ${serializeParams(params)} }` : params
const serializeParams = (params: any) =>
  Object.keys(params)
    .map(key => `${key}: ${nestParams(params[key])}`)
    .join(', ')
export const getParams = (params: any) => (params ? `(${serializeParams(params)})` : '')

// TODO: Tail Call Recursion
export const joinFieldRecursively = (fieldOrObject: any): string => {
  const joinedFields = Object.keys(fieldOrObject)
    .filter(filterParams)
    .map(key => {
      if (Array.isArray(fieldOrObject)) {
        return `${joinFieldRecursively(fieldOrObject[0])}`
      }
      if (typeof fieldOrObject[key] === 'object') {
        return `${key} { ${joinFieldRecursively(fieldOrObject[key])} }`
      }
      return key
    })
    .join(' ')
  return joinedFields
}
