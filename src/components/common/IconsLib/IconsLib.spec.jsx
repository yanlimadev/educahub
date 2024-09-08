import { render, screen } from "@testing-library/react";
import Icon from ".";

const mock = {
  iconName: "UserIcon",
  className: "test-class",
};

it("Should render the icon correctly", () => {
  render(<Icon {...mock} />);

  expect(screen.getByRole("img")).toBeInTheDocument();

  expect(screen.getByRole("img")).toHaveAttribute("class", "test-class");
});
