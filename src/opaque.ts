import type { Equal, Expect } from "./helpers";

export type OpaqueBase = { readonly __opaque__: unique symbol }
export type Opaque <T> = T & OpaqueBase;

type ExpectedType = string & OpaqueBase
type ReceivedType = Opaque<string>
type _testCases = [Expect<Equal<ExpectedType, ReceivedType>>]
