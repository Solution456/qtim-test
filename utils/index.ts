export const isNumber = (val: any): val is number => typeof val === 'number' && !Number.isNaN(val)

export function parseNumber(val: any): number {
  if (isNumber(val))
    return val

  const parsedValue = Number.parseInt(val)
  if (!Number.isNaN(parsedValue))
    return parsedValue

  return 0
}
