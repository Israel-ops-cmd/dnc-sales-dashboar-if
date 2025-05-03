import '@testing-library/jest-dom'
import 'jest-styled-components'
import { TextEncoder as NodeTextEncoder, TextDecoder as NodeTextDecoder } from 'util'

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = NodeTextEncoder as unknown as typeof global.TextEncoder
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = NodeTextDecoder as unknown as typeof global.TextDecoder
}
