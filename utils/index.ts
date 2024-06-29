export const isNumber = (val: any): val is number => typeof val === 'number' && !Number.isNaN(val)
