import type { Cons } from "../fp";
import { helloer } from ".";

const mockConsole: typeof Cons.log = jest
  .fn()
  .mockImplementation(() => jest.fn());

describe(helloer, () => {
  it("does what I expected it to do", () => {
    helloer("some message")({ printer: mockConsole });

    expect(mockConsole).toHaveBeenCalledWith("some message");
  });
});
