import {getSwiftIsoLabel, Iso20022SchemaKey} from '../src/getSwiftIsoLabel'

describe('getSwiftIsoLabel', () => {
  it('should return the correct abbreviation for a valid key', () => {
    const key: Iso20022SchemaKey = 'Ability'
    const result = getSwiftIsoLabel(key)
    expect(result).toBe('Ablty')
  })

  it('should return the correct abbreviation for another valid key', () => {
    const key: Iso20022SchemaKey = 'Abbreviated'
    const result = getSwiftIsoLabel(key)
    expect(result).toBe('Abbrvtd')
  })

  it('should return the key if it is not in the schema with a label', () => {
    const key = 'NonExistentKey'
    // @ts-expect-error - Testing that a non-existing key will cause a TypeScript error
    const result = getSwiftIsoLabel(key)
    expect(result).toBe('NonExistentKey')
  })
})
