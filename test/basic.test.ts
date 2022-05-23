import { assert, expect, test } from "vitest";

import { add } from "../src/index";

test("add()", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(-2, 2)).toBe(0);
});
