import { assert, expect, test } from "vitest";

import { add } from "../dist/module";

test("add()", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(-2, 2)).toBe(0);
});
