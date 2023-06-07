import type { Cons, RIO } from "../fp";
import { R } from "../fp";

type HelloerDeps = { printer: typeof Cons.log };

export const helloer: (msg: string) => RIO.ReaderIO<HelloerDeps, void> = (
  msg
) => R.asks(({ printer }) => printer(msg));
