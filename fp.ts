import type * as RTE from "fp-ts/ReaderTaskEither";
import type * as TE from "fp-ts/TaskEither";

export * as Ap from "fp-ts/Apply";
export * as A from "fp-ts/Array";
export * as B from "fp-ts/boolean";
export * as Bnd from "fp-ts/Bounded";
export * as Cons from "fp-ts/Console";
export * as Const from "fp-ts/Const";
export * as DA from "fp-ts/Date";
export * as E from "fp-ts/Either";
export * as Eq from "fp-ts/Eq";
export * from "fp-ts/function";
export * as IO from "fp-ts/IO";
export * as IOE from "fp-ts/IOEither";
export * as J from "fp-ts/Json";
export * as Mn from "fp-ts/Monoid";
export * as N from "fp-ts/number";
export * as O from "fp-ts/Option";
export * as Ord from "fp-ts/Ord";
export * as Pred from "fp-ts/Predicate";
export * as Rand from "fp-ts/Random";
export * as R from "fp-ts/Reader";
export * as RE from "fp-ts/ReaderEither";
export * as RIO from "fp-ts/ReaderIO";
export * as RT from "fp-ts/ReaderTask";
export * as RTE from "fp-ts/ReaderTaskEither";
export * as RA from "fp-ts/ReadonlyArray";
export * as RM from "fp-ts/ReadonlyMap";
export * as RNEA from "fp-ts/ReadonlyNonEmptyArray";
export * as RR from "fp-ts/ReadonlyRecord";
export * as RS from "fp-ts/ReadonlySet";
export * as RTup from "fp-ts/ReadonlyTuple";
export * as Sg from "fp-ts/Semigroup";
export * as Sep from "fp-ts/Separated";
export * as Show from "fp-ts/Show";
export * as St from "fp-ts/State";
export * as Store from "fp-ts/Store";
export * as Str from "fp-ts/string";
export * as T from "fp-ts/Task";
export * as TE from "fp-ts/TaskEither";
export * as Tree from "fp-ts/Tree";
export * as STE from "fp-ts-contrib/StateTaskEither";
export * as Zip from "fp-ts-contrib/Zipper";
export * as t from "io-ts";
export * as D from "io-ts/Decoder";
export * as Enc from "io-ts/Encoder";
export * as TD from "io-ts/TaskDecoder";
export * as tt from "io-ts-types";
export * as Iso from "monocle-ts/Iso";
export * as L from "monocle-ts/Lens";
export * as Pr from "monocle-ts/Prism";
export * as Tr from "monocle-ts/Traversal";
export * as New from "newtype-ts";

// eslint-disable-next-line @typescript-eslint/ban-types
export type Pretty<T> = { [K in keyof T]: T[K] } & {};

export const runReader =
  <R, E, A extends unknown[], B>(
    fa: (...a: A) => RTE.ReaderTaskEither<R, E, B>
  ): ((deps: R) => (...a: A) => TE.TaskEither<E, B>) =>
  (deps) =>
  (...a) =>
    fa(...a)(deps);
