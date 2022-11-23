import { render, screen, cleanup } from "@testing-library/react";

import Coffeefacts from "../components/coffeefacts";

describe("Display", () => {
  test("Gets Display", () => {
    render(<Coffeefacts />);
  });
});
test("should render component stuff", () => {
  render(<Coffeefacts />);
  expect(screen.getByText(/Fact/));
});
