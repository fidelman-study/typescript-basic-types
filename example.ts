/**
 * Boolean
 */
const isDone: boolean = false
/**
 * Number
 */
const decimal: number = 6
/**
 * String
 */
const color: string = 'blue'
/**
 * Array
 */
const numbers: number[] = [1, 2, 3,]
const vegetables: Array<string> = ['potato', 'tomato',]
/**
 * Tuple
 */
const graph: [string, number] = ['hi', 1];
/**
 * Enum
 */
enum Color {
  Red,
  Green = 5,
  Blue,
}
/**
 * Any
 */
let notSure: any = 4
notSure = 'maybe string'

const notSureList: any[] = [1, 'string']
/**
 * Void
 */
function warnUser(): void {
  console.error('Error')
}
const unusable: void = undefined
/**
 * Null Undefined
 */
const u: undefined = undefined
const n: null = null
/**
 * Never
 */
function error(message: string): never {
  throw new Error(message)
}
function fail(): never {
  return error('Failed')
}
function infiniteLoop(): never {
  while(true) {

  }
}
/**
 * Object
 */
function create(user: object): object {
  return { ...user, id: Math.random(), }
}
/**
 * Type Assertion
 */
const anyValue: any = 'this is a string'
const strLength: number = (<string>anyValue).length
const firstWord: string = (anyValue as string).split(' ')[0] // JSX Preferred
