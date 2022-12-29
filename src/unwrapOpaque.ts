import type { Expect, Equal } from "./helpers";
import type { Opaque } from "./opaque";

export type UnwrapOpaque<T extends Opaque<unknown>> = T extends Opaque<infer R> ? R : never;

type ExpectedType = string
type ReceivedType = UnwrapOpaque<Opaque<string>>
type _testCases = [Expect<Equal<ExpectedType, ReceivedType>>]
