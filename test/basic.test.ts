import { assert, beforeEach, describe, expect, test } from "vitest";

import { store, incrementCount, decrementCount } from "../dist/module";

describe("trying to count", () => {
  beforeEach(() => {
    store.dispatch({ type: "GLOBAL_RESET", payload: undefined });
  });

  test("increment works", () => {
    store.dispatch(incrementCount());
    store.dispatch(incrementCount());
    store.dispatch(incrementCount());

    expect(store.getState().counter.count).toBe(3);
  });

  test("decrement works", () => {
    store.dispatch(decrementCount());
    store.dispatch(decrementCount());
    store.dispatch(decrementCount());

    expect(store.getState().counter.count).toBe(-3);
  });
});
